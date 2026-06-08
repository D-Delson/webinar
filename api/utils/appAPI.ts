"use client";

import axios, {
    AxiosError,
    AxiosInstance,
} from "axios";

import {
    getAccessToken,
    getRefreshToken,
    setTokenData,
    clearTokenData,
} from "./tokenHelpers";

import { getHostAPIUrl } from "@/utils/getHostUrl";

import { ADMIN_REFRESH_API } from "../endpoints/auth";

let isRefreshing = false;

let subscribers: ((
    token: string
) => void)[] = [];

const subscribe = (
    cb: (token: string) => void
) => {
    subscribers.push(cb);
};

const notifySubscribers = (
    token: string
) => {
    subscribers.forEach((cb) =>
        cb(token)
    );

    subscribers = [];
};

/* =========================
   Create ONE Axios Instance
========================= */

const api: AxiosInstance =
    axios.create({
        baseURL: getHostAPIUrl(),
        timeout: 30000,
        responseType: "json",
    });

/* =========================
   Request Interceptor
========================= */

api.interceptors.request.use(
    (config) => {
        const token =
            getAccessToken();

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    }
);

/* =========================
   Response Interceptor
========================= */

api.interceptors.response.use(
    (response) => response,

    async (error: AxiosError) => {
        const originalRequest: any =
            error.config;

        const status =
            error.response?.status;

        if (
            (status === 401 ||
                status === 403) &&
            !originalRequest?._retry
        ) {
            originalRequest._retry = true;

            if (isRefreshing) {
                return new Promise(
                    (resolve) => {
                        subscribe(
                            (newToken) => {
                                originalRequest.headers.Authorization =
                                    `Bearer ${newToken}`;

                                resolve(
                                    api(originalRequest)
                                );
                            }
                        );
                    }
                );
            }

            isRefreshing = true;

            try {
                const refreshToken =
                    getRefreshToken();

                if (!refreshToken) {
                    throw new Error(
                        "No refresh token"
                    );
                }

                const response =
                    await axios.post(
                        getHostAPIUrl() +
                        ADMIN_REFRESH_API,
                        {
                            refresh:
                                refreshToken,
                        }
                    );

                const {
                    access,
                    refresh,
                } =
                    response.data?.data ??
                    {};

                if (!access) {
                    throw new Error(
                        "Invalid refresh response"
                    );
                }

                setTokenData({
                    token: {
                        access,
                        refresh,
                    },
                });

                notifySubscribers(
                    access
                );

                originalRequest.headers.Authorization =
                    `Bearer ${access}`;

                return api(
                    originalRequest
                );
            } catch (err) {
                clearTokenData();

                window.location.replace(
                    "/admin/login"
                );

                return Promise.reject(
                    err
                );
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }
);

export default api;