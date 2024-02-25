import { useContext } from "react";
import { CartContext } from "../cart-context";
import { UserContext } from "../user-context";

export const useCartContext = () => {
  const context = useContext(CartContext);
  return context;
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  return context;
};
