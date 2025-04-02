"use client";

import { useState } from "react";
import { useCategories } from "@/context/CategoryProvider";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const { addCategory, isLoading } = useCategories();

  const handleAddCategory = async () => {
    if (!categoryName.trim()) return;
    await addCategory(categoryName);
    setCategoryName("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full p-3 bg-red-500 text-white hover:bg-gray-800 cursor-pointer">
          <Plus size={20} />
        </Button>
      </DialogTrigger>

      <DialogContent className="p-6 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Add new category
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <label className="block text-gray-700 font-medium">
            Category name
          </label>
          <input
            type="text"
            placeholder="Type category name..."
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="w-full p-2 border rounded-lg"
          />
          <DialogClose asChild>
            <Button
              onClick={handleAddCategory}
              disabled={isLoading}
              className="w-full bg-black text-white"
            >
              Add category
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddCategory;
