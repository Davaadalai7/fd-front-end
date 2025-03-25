"use client";

import { useState } from "react";
import { PlusCircle, Edit } from "lucide-react";

// Define TypeScript interfaces for type safety
interface Category {
  name: string;
  count: number;
}

interface Dish {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
}

// Placeholder for actual API call
const fetchDishes = async (category?: string): Promise<Dish[]> => {
  try {
    // Replace with your actual API endpoint
    const response = await fetch(
      `/api/dishes?category=${category || "All Dishes"}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch dishes");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching dishes:", error);
    return [];
  }
};

const categories: Category[] = [];

export default function FoodMenu() {
  const [selectedCategory, setSelectedCategory] = useState("All Dishes");
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch dishes when category changes
  const handleCategorySelect = async (category: string) => {
    setSelectedCategory(category);
    setIsLoading(true);
    try {
      const fetchedDishes = await fetchDishes(category);
      setDishes(fetchedDishes);
    } catch (error) {
      console.error("Error loading dishes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">NomNom Menu</h1>
        <img
          src="https://res.cloudinary.com/du9etdqhq/image/upload/v1742898654/food-delivery/tvnm5leqiy3eipsmngad.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>

      {/* Category Selector */}
      <div className="flex gap-2 flex-wrap mb-4 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedCategory === category.name
                ? "bg-red-500 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => handleCategorySelect(category.name)}
          >
            {category.name} {category.count > 0 && `(${category.count})`}
          </button>
        ))}
      </div>

      {/* Dishes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Add New Dish Placeholder */}
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center p-4 cursor-pointer hover:bg-gray-50"
          onClick={() => {
            /* Open add dish modal */
          }}
        >
          <div className="text-center">
            <PlusCircle className="mx-auto mb-2 text-gray-500" size={32} />
            <p className="text-gray-500">Add new Dish to {selectedCategory}</p>
          </div>
        </div>

        {/* Dish Cards */}
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="relative border rounded-lg overflow-hidden"
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-48 object-cover"
            />
            <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
              <Edit size={16} className="text-red-500" />
            </button>
            <div className="p-4">
              <h2 className="font-bold text-lg">{dish.name}</h2>
              <p className="text-gray-500 text-sm">{dish.description}</p>
              <p className="font-bold text-red-500 mt-2">{dish.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
