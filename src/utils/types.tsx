export type Food = {
  _id: string;
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  category: Category;
  createdAt: Date;
  updatedAt: Date;
};

export type Category = {
  id: number;
  name: string;
};

export type User = {
  id: string;
  email: string;
  role: "user" | "admin";
};
