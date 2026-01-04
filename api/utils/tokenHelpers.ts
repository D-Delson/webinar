"use client";

/* =========================
   Types
========================= */

export interface TokenPayload {
  access: string;
  refresh: string;
}

export type UserType = string;

/* =========================
   Storage Keys (centralized)
========================= */

const STORAGE_KEYS = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
} as const;

/* =========================
   Safe localStorage Wrapper
========================= */

const storage = {
  get<T>(key: string): T | null {
    if (typeof window === "undefined") return null;
    try {
      const value = localStorage.getItem(key);
      return value ? (JSON.parse(value) as T) : null;
    } catch {
      return null;
    }
  },

  set<T>(key: string, value: T) {
    if (typeof window === "undefined") return;
    localStorage.setItem(key, JSON.stringify(value));
  },

  remove(key: string) {
    if (typeof window === "undefined") return;
    localStorage.removeItem(key);
  },
};

/* =========================
   Setters
========================= */

export const setTokenData = ({ token }: { token: TokenPayload }) => {
  const { access, refresh } = token;

  storage.set(STORAGE_KEYS.ACCESS_TOKEN, access);
  storage.set(STORAGE_KEYS.REFRESH_TOKEN, refresh);
};

/* =========================
   Getters
========================= */

export const getAccessToken = (): string | null =>
  storage.get<string>(STORAGE_KEYS.ACCESS_TOKEN);

export const getRefreshToken = (): string | null =>
  storage.get<string>(STORAGE_KEYS.REFRESH_TOKEN);

/* =========================
   Clear (Logout)
========================= */

export const clearTokenData = () => {
  Object.values(STORAGE_KEYS).forEach(storage.remove);
};
