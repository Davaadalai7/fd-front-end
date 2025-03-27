"use client";

import { createContext, useContext, useEffect, useState } from "react";

type UserContextType = {
  email: string | undefined;
  role: string | undefined;
};

const userContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserContextType | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const user = localStorage.getItem("user");
    setUser(JSON.parse(user || "{}"));
    setLoading(false);
  }, []);
  return (
    <userContext.Provider value={{ email: user?.email, role: user?.role }}>
      {loading ? <div>...Loading</div> : children}
    </userContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(userContext);
  return context;
};
