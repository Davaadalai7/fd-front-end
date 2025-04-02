"use client";

import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type Category = {
  _id: string;
  categoryName: string;
};

type CategoryContextType = {
  isLoading: boolean;
  categories: Category[];
  addCategory: (categoryName: string) => Promise<void>;
};

const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

export const CategoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await fetch("http://localhost:4000/category");
      if (!res.ok) throw new Error("Failed to fetch categories");
      const data = await res.json();

      setCategories(data);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  const addCategory = async (categoryName: string) => {
    setIsLoading(true);
    if (!categoryName.trim()) return;

    try {
      const res = await fetch("http://localhost:4000/category", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ categoryName }),
      });

      const response = await res.json();
      setCategories((prev) => [...prev, { ...response.data }]);

      if (!res.ok) throw new Error("Failed to add category");
    } catch (err) {
      console.error("Error adding category:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CategoryContext.Provider value={{ categories, addCategory, isLoading }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategories = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategories must be used within a CategoryProvider");
  }
  return context;
};
