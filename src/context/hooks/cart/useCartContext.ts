import { useContext } from "react";
import { CartContext } from "../../cart-context";

export const useCartContext = () => {
  const context = useContext(CartContext);
  return context;
};
