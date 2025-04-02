"use client";

import React from "react";
import AddCategory from "./AddCategory";
import { useCategories } from "@/context/CategoryProvider";

const Categories = () => {
  const { categories } = useCategories();
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dishes category</h2>
      <div className="flex gap-3">
        <div className="space-y-2 flex gap-3">
          {categories.map((category) => (
            <div
              key={category._id}
              className="flex p-4 bg-white border rounded-full items-center text-center justify-center w-auto h-[36px]"
            >
              {category.categoryName}
            </div>
          ))}
        </div>
        <AddCategory />
      </div>
    </div>
  );
};

export default Categories;
