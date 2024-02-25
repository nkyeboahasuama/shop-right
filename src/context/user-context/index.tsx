import React, { useState, createContext } from "react";
import { IUser } from "../../core/interface";

interface IUserContext {
  setUserState: (userObject: IUser) => void;
  user: IUser | null;
}

export const UserContext = createContext<IUserContext>({
  setUserState: () => {},
  user: null,
});

export const UserContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<IUser | null>(null);

  const setUserState = (userObject: IUser) => {
    setUser(userObject);
  };

  return (
    <UserContext.Provider value={{ setUserState, user }}>
      {children}
    </UserContext.Provider>
  );
};
