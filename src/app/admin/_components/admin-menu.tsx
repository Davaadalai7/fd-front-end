"use client";

import React from "react";
import { LayoutGrid, Truck, Settings } from "lucide-react";
import Logo from "@/components/Logo";
import { useRouter, usePathname } from "next/navigation";

const MenuItem = ({
  name,
  Icon,
  isActive,
  onClick,
}: {
  name: string;
  Icon: any;
  isActive?: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`flex items-center gap-3 px-6 py-2 w-full rounded-3xl cursor-pointer ${
        isActive ? "bg-black text-white" : "text-gray-800 hover:bg-gray-200"
      }`}
      onClick={onClick}
    >
      <Icon size={20} />
      <span>{name}</span>
    </div>
  );
};

const AdminMenu = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === `/admin/${path}`;
  };

  const navigateTo = (path: string) => {
    router.push(`/admin/${path}`);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-[205px] h-screen bg-white flex flex-col items-center gap-3.5 p-4 shadow-lg">
        <Logo />
        <MenuItem
          name="Food menu"
          Icon={LayoutGrid}
          isActive={isActive("food-menu")}
          onClick={() => navigateTo("food-menu")}
        />
        <MenuItem
          name="Orders"
          Icon={Truck}
          isActive={isActive("orders")}
          onClick={() => navigateTo("orders")}
        />
        <MenuItem
          name="Settings"
          Icon={Settings}
          isActive={isActive("settings")}
          onClick={() => navigateTo("settings")}
        />
      </div>
    </div>
  );
};

export default AdminMenu;
