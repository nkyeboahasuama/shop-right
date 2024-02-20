import React from "react";
import { Header } from "../../sharedComponents";
import { Typography } from "../../sharedComponents/atoms";
import {
  CartItem,
  CartItemCard,
  CartItemContainer,
  CartItemName,
  CartItemPrice,
  CartItemQuantity,
  CartValueDetails,
  Container,
} from "./components";

export const CartPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Typography variant="p">Shopping Cart</Typography>
        <CartItemContainer>
          <CartItem>
            <CartItemCard></CartItemCard>
            <CartItemName>Product Name</CartItemName>
          </CartItem>
          <CartValueDetails>
            <CartItemQuantity>- 3 +</CartItemQuantity>
            <CartItemPrice>$230</CartItemPrice>
          </CartValueDetails>
        </CartItemContainer>
      </Container>
    </>
  );
};
