import { createContext, useEffect, useState } from "react";
import { UserContextType, UserProviderProps } from "~/components/utils";

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [users, setUsers] = useState<Record<string, boolean>>({
    Nicolas: true,
    Mary: true,
    Julia: true,
    John: true,
    Jorge: true,
  });

  const randomizeOneUser = (users: Record<string, boolean>) => {
    const names = Object.keys(users);
    const random = Math.floor(Math.random() * names.length);
    const newUsers = { ...users };
    newUsers[names[random]] = !users[names[random]];
    return newUsers;
  };

  const randomizeUsers = () => {
    setUsers((prevUsers) => randomizeOneUser(prevUsers));
  };

  useEffect(() => {
    const interval = setInterval(randomizeUsers, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <UserContext.Provider value={{ users, randomizeUsers }}>
      {children}
    </UserContext.Provider>
  );
};
