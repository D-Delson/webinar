"use client";

import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAccessToken } from "@/utils/token";

export const useGuestGuard = () => {
  const router = useRouter();

  useEffect(() => {
    const token = getAccessToken();
    if (!token) return;

    try {
      const decoded: any = jwtDecode(token);
      const now = Math.floor(Date.now() / 1000);

      if (decoded.exp > now) {
        router.replace("/dashboard");
      }
    } catch {
      router.replace("admin/login");
    }
  }, [router]);
};
