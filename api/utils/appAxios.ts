import axios from "axios";

import { getRefreshToken, getAccessToken, setTokenAndUserData } from "@/utils/token";
import { getHostAPIUrl } from "@/utils/getHostUrl";

let isRefreshing = false;
let refreshSubscribers: ((newToken?: string) => void)[] = [];

export default function appAxios() {
  const axiosCreate = axios.create({
    baseURL: getHostAPIUrl(),
    timeout: 30000,
    responseType: "json",
  });

  const ref_token = getRefreshToken();

  const subscribeToRefreshToken = (callback: (newToken?: string) => void) => {
    refreshSubscribers?.push(callback);
  };

  const retryFailedRequests = (newToken?: string) => {
    refreshSubscribers?.forEach((callback) => callback(newToken));
    refreshSubscribers = [];
  };

  axiosCreate.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error?.config;
      const status = error?.response?.status;

      if ([401, 403]?.includes(status) && !originalRequest._retry) {
        if (isRefreshing) {
          return new Promise((resolve) => {
            subscribeToRefreshToken((newToken?: string) => {
              originalRequest.headers.Authorization = `Bearer ${newToken}`;
              resolve(axios(originalRequest));
            });
          });
        }

        isRefreshing = true;

        try {
          const data = await axios.post(getHostAPIUrl(),{
            refresh_token: ref_token,
          });

          const { access_token, refresh_token, token_type } =
            data?.data?.data || {};

          if (refresh_token) {
            setTokenAndUserData({
              //@ts-ignore
              token: data?.data?.data,
            });

            originalRequest.headers.Authorization = `${token_type} ${access_token}`;
            retryFailedRequests(access_token);

            return axios(originalRequest);
          }
        } catch (e) {
          console.error("Error refreshing token:", e);
          window.location.replace("/");
        } finally {
          isRefreshing = false;
        }
      }

      return Promise.reject(error);
    }
  );

  return axiosCreate;
}
