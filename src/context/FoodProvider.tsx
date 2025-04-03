"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Food = {
  _id: string;
  name: string;
  category: string;
  price: number;
  image: string;
};

type FoodContextType = {
  isLoading: boolean;
  foods: Food[];
  addFood: (food: Omit<Food, "_id">) => Promise<void>;
};

const FoodContext = createContext<FoodContextType | undefined>(undefined);

export const FoodProvider = ({ children }: { children: React.ReactNode }) => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const res = await fetch("http://localhost:4000/food");
      if (!res.ok) throw new Error("Failed to fetch foods");
      const data = await res.json();
      setFoods(data);
    } catch (err) {
      console.error("Error fetching foods:", err);
    }
  };

  const addFood = async (food: Omit<Food, "_id">) => {
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:4000/food", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(food),
      });

      const response = await res.json();
      setFoods((prev) => [...prev, { ...response.data }]);

      if (!res.ok) throw new Error("Failed to add food");
    } catch (err) {
      console.error("err adding food:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FoodContext.Provider value={{ foods, addFood, isLoading }}>
      {children}
    </FoodContext.Provider>
  );
};

export const useFoods = () => {
  const context = useContext(FoodContext);
  if (!context) {
    throw new Error("useFoods must be used with in a FoodProvider");
  }
  return context;
};
