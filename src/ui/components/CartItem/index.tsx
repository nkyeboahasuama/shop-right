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
import { ICartItem } from "../../../core/interface";
import { useCartContext } from "../../../context/hooks";
import { Typography } from "../../sharedComponents/atoms";

interface IProps {
  cartItem: ICartItem;
}

export const CartItemComponent: React.FC<IProps> = ({ cartItem }) => {
  const { quantityUpdates, cartItemPrice, removeProductFromCart } =
    useCartContext();

  const handleIncrease = () => {
    quantityUpdates(cartItem, { action: "increase" });
  };

  const handleDecrease = () => {
    quantityUpdates(cartItem, { action: "decrease" });
  };

  return (
    <CartItemContainer>
      <CartItem>
        <CartItemCard></CartItemCard>
        <div>
          <CartItemName>{cartItem.product.name}</CartItemName>
          <Typography variant="p">${cartItem.product.price}</Typography>
        </div>
      </CartItem>
      <CartValueDetails>
        <CartItemQuantity>
          <MinusButton onClick={handleDecrease}>
            <BiMinus />
          </MinusButton>
          {cartItem.quantity}
          <PlusButton onClick={handleIncrease}>
            <BiPlus />
          </PlusButton>
        </CartItemQuantity>
        <CartItemPrice>${cartItemPrice(cartItem)}</CartItemPrice>
      </CartValueDetails>
      <CancelButton onClick={() => removeProductFromCart(cartItem)}>
        <MdOutlineClose />
      </CancelButton>
    </CartItemContainer>
  );
};
