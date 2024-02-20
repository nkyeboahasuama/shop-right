import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartItemContainer = styled.div`
  border: 2px red solid;
  display: flex;
  justify-content: space-between;
`;

export const CartItem = styled.div`
  display: flex;
  border: 2px yellow solid;
  gap: 5px;
`;

export const CartItemCard = styled.div`
  background-color: blue;
  width: 200px;
  height: 200px;
`;

export const CartItemName = styled.div``;

export const CartValueDetails = styled.div`
  border: 2px blue solid;
  display: flex;
  gap: 30px;
`;

export const CartItemPrice = styled.div``;

export const CartItemQuantity = styled.div``;
