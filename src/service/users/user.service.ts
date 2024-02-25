import axios from "axios";
import { IUser } from "../../core/interface";

const USER_API = "http://localhost:3001/api/user";

const createUser = async (newUser: IUser) => {
  try {
    const response = await axios.patch(`${USER_API}`, newUser);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const userService = { createUser };
