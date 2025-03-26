"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import React from "react";
import { useJwt } from "react-jwt";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathName = usePathname();

  const storedToken =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const { isExpired } = useJwt(storedToken!);

  useEffect(() => {
    if (!storedToken || isExpired) {
      router.push("/login");
      return;
    } else if (pathName === "/login") {
      router.push("/");
    }
  }, [isExpired, router]);

  return children;
};
