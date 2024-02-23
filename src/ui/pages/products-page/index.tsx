import {
  Container,
  ProductCard,
  ProductContainer,
  ProductDetails,
  ProductName,
  ProductPrice,
} from "./components";
import { Header } from "../../sharedComponents";
import { useNavigate } from "react-router-dom";

export const ProductsPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Container>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <ProductContainer key={item}>
            <ProductCard onClick={() => navigate(`/product/${item}`)} />
            <ProductDetails>
              <ProductName>Product name {item}</ProductName>
              <ProductPrice>$1290</ProductPrice>
            </ProductDetails>
          </ProductContainer>
        ))}
      </Container>
    </>
  );
};
