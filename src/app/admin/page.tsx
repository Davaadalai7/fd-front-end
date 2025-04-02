"use client";

import React, { useState } from "react";
import { LayoutGrid, Truck, Settings } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Logo from "@/components/Logo";

const AdminMenu = () => {
  const [selectedTab, setSelectedTab] = useState("food-menu");

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-auto h-screen bg-white flex flex-col items-center gap-3.5 p-4">
        <Logo />
        <Tabs
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="w-full px-8"
        >
          <TabsList className="flex flex-col gap-2 w-full">
            <TabsTrigger
              value="food-menu"
              className={`flex items-center gap-3 px-6 py-2 w-full rounded-3xl cursor-pointer ${
                selectedTab === "food-menu"
                  ? "bg-black text-white"
                  : "text-gray-800 hover:bg-gray-200"
              }`}
            >
              <LayoutGrid size={20} />
              Food menu
            </TabsTrigger>
            <TabsTrigger
              value="orders"
              className={`flex items-center gap-3 px-6 py-2 w-full rounded-3xl cursor-pointer ${
                selectedTab === "food-menu"
                  ? "bg-black text-white"
                  : "text-gray-800 hover:bg-gray-200"
              }`}
            >
              <Truck size={20} />
              Orders
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className={`flex items-center gap-3 px-6 py-2 w-full rounded-3xl cursor-pointer ${
                selectedTab === "food-menu"
                  ? "bg-black text-white"
                  : "text-gray-800 hover:bg-gray-200"
              }`}
            >
              <Settings size={20} />
              Settings
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminMenu;
