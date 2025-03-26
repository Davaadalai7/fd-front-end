import { DishButton } from "../_components/DishButton.tsx";
import { Category, Food } from "@/utils/types.tsx";
import { AddCategoryButton } from "../_components/AddCategoryButton.tsx";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Categories = (props: {
  foods: Array<Food>;
  categories: Array<Category>;
}) => {
  const { foods } = props;
  const {
    data: CatList,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:4000/category");
      return response.data;
    },
  });
  return (
    <div className="bg-white rounded-md p-5">
      <p>Dishes Category</p>
      <div className="flex gap-3 flex-wrap w-full">
        <DishButton name="All dishes" size={foods?.length} />
        {isLoading ? (
          <div>Loading categories</div>
        ) : (
          cateList?.map((el: Category, index: number) => {
            return (
              <DishButton
                key={index}
                name={el.categoryName}
                size={el.foodCount}
              />
            );
          })
        )}
        <AddCategoryButton refetch={refetch} />
      </div>
    </div>
  );
};
