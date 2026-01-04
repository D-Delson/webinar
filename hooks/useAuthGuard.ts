"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import appAxios from "@/api/utils/appAxios";
import { getAccessToken } from "@/utils/token";
import { getHostAPIUrl } from "@/utils/getHostUrl";
import { SERVICE_PACKAGE_LIST_API } from "@/api/endpoints/admin";

export const useAuthGuard = () => {
  const router = useRouter();

  useEffect(() => {
    const token = getAccessToken();

    if (!token) {
      router.replace("/admin/login");
      return;
    }

    // Trigger a lightweight authenticated request
    // Axios will refresh automatically if needed
    appAxios()
      .get(getHostAPIUrl() + SERVICE_PACKAGE_LIST_API)
      .catch(() => {
        // If refresh failed, interceptor already cleared tokens
      });
  }, [router]);
};
