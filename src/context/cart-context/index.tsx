import React, { useState, createContext } from "react";
import { ICartItem, IProduct } from "../../core/interface";
import CartCoreActions from "./use_cases/cartUseCases";

interface IQuantityActions {
  action: "increase" | "decrease";
}

interface ICartContext {
  cartItems: ICartItem[];
  cartItemsNumber: number;
  addToCart: (cartItem: ICartItem) => void;
  quantityUpdates: (cartItem: ICartItem, action: IQuantityActions) => void;
  cartItemPrice: (cartItem: ICartItem) => number;
  cartItemsTotalPrice: () => number;
  removeProductFromCart: (cartItem: ICartItem) => void;
}
export const CartContext = createContext<ICartContext>({
  cartItems: [],
  cartItemsNumber: 0,
  addToCart: () => {},
  quantityUpdates: () => {},
  cartItemPrice: () => 0,
  cartItemsTotalPrice: () => 0,
  removeProductFromCart: () => {},
});

export const CartContextProvider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  const cartActions = new CartCoreActions(cartItems);

  const addToCart = (newCartItem: ICartItem) => {
    const results = cartActions.addCartItem(newCartItem);
    if (!results) return;
    setCartItems(results);
  };

  const quantityUpdates = (
    newCartItem: ICartItem,
    action: IQuantityActions
  ) => {
    if (!newCartItem) return;

    let updatedCartItem: ICartItem;
    if (action.action === "increase") {
      updatedCartItem = cartActions.increaseQuantity(newCartItem);
    } else {
      updatedCartItem = cartActions.decreaseQuantity(newCartItem);
    }

    let newCartItemsArray: ICartItem[];
    if (updatedCartItem.quantity < 1) {
      newCartItemsArray = cartActions.removeCartItem(newCartItem);
    } else {
      newCartItemsArray = cartActions.updateCartItem(updatedCartItem);
    }

    setCartItems(newCartItemsArray);
  };

  const cartItemsNumber = cartItems.length;

  const removeProductFromCart = (cartItem: ICartItem) => {
    const results = cartActions.removeCartItem(cartItem);
    setCartItems(results);
  };

  const cartItemPrice = (cartItem: ICartItem) => {
    const results = cartActions.totalCartItemPriceByQuamtity(cartItem);
    return results;
  };

  const cartItemsTotalPrice = () => {
    const results = cartActions.totalCartPrice();
    return results;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartItemsNumber,
        addToCart,
        quantityUpdates,
        cartItemPrice,
        cartItemsTotalPrice,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
