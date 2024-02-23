import styled from "styled-components";
import { Typography } from "../../sharedComponents/atoms";
import { BsChevronDown } from "react-icons/bs";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  box-sizing: content-box;
  padding: 0px 100px;
`;

export const ProductCard = styled.div`
  width: 50%;
  height: 600px;
  background-color: red;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 40%;
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProductName = styled.p`
  font-family: "Cormorant Infant", serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  font-size: 45px;
  text-size-adjust: 100%;
`;

export const ProductPrice = styled(Typography)`
  font-weight: 500;
`;

export const ProductSize = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  select {
    height: 70px;
    text-transform: uppercase;
    padding: 0px 20px;
    background: none;
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
    z-index: 2;

    option {
      margin: 100px;
      font-size: 18px;
    }
  }
`;

export const SelectArrowDown = styled(BsChevronDown)`
  position: absolute;
  right: 20px;
  top: 50%;
  font-size: 25px;
  font-weight: 100;
  cursor: pointer;
  background: transparent;
`;
export const ProductQuantity = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  input {
    height: 70px;
    width: 50%;
    padding: 0px 20px;
  }
`;

export const AddToCartButton = styled.button`
  height: 45px;
  width: 90%;
  border-radius: 30px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    color: white;
  }
`;
