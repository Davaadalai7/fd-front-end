"use client";

import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2 mb-6">
      <img
        src="https://res.cloudinary.com/du9etdqhq/image/upload/v1743493031/food-delivery/Logo/s6a6ndxdasqtcxr6tn3a.png"
        alt="NomNom Logo"
        className="w-10 h-10"
      />
      <div>
        <h1 className="text-lg font-bold text-gray-900">NomNom</h1>
        <p className="text-sm text-gray-500">Swift delivery</p>
      </div>
    </div>
  );
};

export default Logo;
