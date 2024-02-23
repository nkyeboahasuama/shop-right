import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  padding: 20px 0px;
  /* padding-bottom: 10px; */
  border-bottom: 1px gray solid;
`;

export const CartItem = styled.div`
  display: flex;
  gap: 20px;
  width: 65%;
`;

export const CartItemCard = styled.div`
  background-color: red;
  width: 150px;
  height: 150px;
`;

export const CartItemName = styled.div`
  font-weight: 600;
  font-size: 20px;
`;

export const CartValueDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  width: 35%;
`;

export const CartItemQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  height: fit-content;
`;

export const CartItemPrice = styled.div`
  font-size: 20px;
  height: 35px;
  display: flex;
  align-items: center;
`;

export const MinusButton = styled.div`
  height: 35px;
  width: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
`;

export const PlusButton = styled.div`
  height: 35px;
  width: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
`;
export const CancelButton = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-left: 30px;
  cursor: pointer;

  &:hover {
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
`;
