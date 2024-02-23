import React from "react";
import {
  CancelButton,
  CartItem,
  CartItemCard,
  CartItemContainer,
  CartItemName,
  CartItemPrice,
  CartItemQuantity,
  CartValueDetails,
  MinusButton,
  PlusButton,
} from "./components";
import { BiMinus, BiPlus } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";

export const CartItemComponent = () => {
  return (
    <CartItemContainer>
      <CartItem>
        <CartItemCard></CartItemCard>
        <CartItemName>Product Name</CartItemName>
      </CartItem>
      <CartValueDetails>
        <CartItemQuantity>
          <MinusButton>
            <BiMinus />
          </MinusButton>
          3
          <PlusButton>
            <BiPlus />
          </PlusButton>
        </CartItemQuantity>
        <CartItemPrice>$230</CartItemPrice>
      </CartValueDetails>
      <CancelButton>
        <MdOutlineClose />
      </CancelButton>
    </CartItemContainer>
  );
};
