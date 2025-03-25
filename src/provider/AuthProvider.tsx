"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import React from "react";
import { useJwt } from "react-jwt";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
    }
  }, []);

  const { isExpired, decodedToken } = useJwt(token!);

  useEffect(() => {
    if (!token) {
      router.push("/login");
      return;
    }
    console.log(decodedToken);

    try {
      if (isExpired) {
        localStorage.removeItem("token");
        router.push("/login");
      }
    } catch (error) {
      localStorage.removeItem("token");
      router.push("/login");
    }
  }, [token, isExpired, router]);

  return children;
};
