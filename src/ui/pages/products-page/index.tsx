import React from "react";
import {
  Container,
  Header,
  ProductCard,
  ProductContainer,
  ProductDetails,
  ProductName,
  ProductPrice,
} from "./components";
import { Typography } from "../../sharedComponents/atoms";

export const ProductsPage = () => {
  return (
    <>
      <Header>
        <div>
          <Typography variant="h5">SHOP-RIGHT</Typography>
        </div>
        <ul>
          <li className="active">Shop</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </Header>
      <Container>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <ProductContainer key={item}>
            <ProductCard />
            <ProductDetails>
              <ProductName>Product name</ProductName>
              <ProductPrice>$1290</ProductPrice>
            </ProductDetails>
          </ProductContainer>
        ))}
      </Container>
    </>
  );
};
