import styled from "styled-components";

export const Header = styled.header`
  height: 100px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  box-sizing: content-box;
  padding: 20px;

  ul {
    list-style: none;
    display: flex;
    gap: 40px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 15px;

    li {
      padding: 5px;
    }

    .active {
      text-decoration: underline;
      text-underline-offset: calc(30%);
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0px 40px;
  gap: 30px;
`;

export const ProductCard = styled.div`
  aspect-ratio: 1/1;
  width: 100%;
  background-color: red;
  border: 2px green solid;
`;

export const ProductContainer = styled.div`
  width: 45%;
  max-height: 50%;
`;

export const ProductDetails = styled.div`
  height: 200px;
  font-size: 25px;
`;

export const ProductName = styled.p`
  font-family: "Cormorant Infant", serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  text-size-adjust: 100%;
`;

export const ProductPrice = styled.p`
  font-weight: 500;
`;
