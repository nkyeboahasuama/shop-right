import axios from "axios";
import { IUser } from "../../core/interface";

const USER_API = "http://localhost:3001/api/user";

const createUser = async (newUser: IUser) => {
  try {
    const response = await axios.post(`${USER_API}/create`, newUser);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (userEmail: string, password: any) => {
  try {
    const response = await axios.post(`${USER_API}/login`, { userEmail });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const userService = { createUser, loginUser };
