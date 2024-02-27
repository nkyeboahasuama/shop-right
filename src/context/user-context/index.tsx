import React, { useState, createContext, useReducer, useEffect } from "react";
import { IUser } from "../../core/interface";

interface IUserDB extends IUser {
  email: string;
  token: any;
}

interface IAction {
  type: string;
  payload: IUser | null;
}
interface IUserContext {
  state: { user: IUser | null };
  dispatch: (action: IAction) => void;
}

export const UserContext = createContext<IUserContext>({
  state: { user: null },
  dispatch: () => null,
});

const authReducer = (state: { user: IUser | null }, action: IAction) => {
  switch (action.type) {
    case "USER_LOGIN":
      return { user: action.payload };
    case "USER_LOGOUT":
      return { user: null };

    default:
      return state;
  }
};

export const UserContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")!);
    console.log(user);
    if (user) {
      dispatch({ type: "USER_LOGIN", payload: user });
    }
  }, []);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
