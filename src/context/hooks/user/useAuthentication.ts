import { useState } from "react";
import axios from "axios";
import { IUser } from "../../../core/interface";
import { useAuthContext } from "./useAuthContext";

const USER_API = "http://localhost:3001/api/user";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signUp = async (newUser: IUser) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post<IUser>(`${USER_API}/signup`, {
        newUser,
      });
      setIsLoading(false);
      dispatch({ type: "USER_LOGIN", payload: response.data });
      return response;
    } catch (error: any) {
      console.log(error);
      if (error.response) {
        setError(error.response.data);
      } else {
        setError(error.message);
      }
      setIsLoading(false);
    }
  };

  const loginUser = async (user: IUser) => {
    try {
      const response = await axios.post(`${USER_API}/login`, {
        user,
      });
      console.log(response);
      dispatch({ type: "USER_LOGIN", payload: response.data });
      localStorage.setItem("user", JSON.stringify(response.data));
      return response;
    } catch (error: any) {
      console.log(error);
      if (error.response) {
        setError(error.response.data);
      } else {
        setError(error.message);
      }
      setIsLoading(false);
    }
  };

  const logoutUser = async () => {
    dispatch({ type: "USER_LOGOUT", payload: null });
    localStorage.removeItem("user");
  };

  return { signUp, loginUser, logoutUser, error, isLoading };
};
