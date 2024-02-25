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
import { useEffect, useState } from "react";
import { productService } from "../../../service/products/product.service";
import { IProduct } from "../../../core/interface";

export const ProductsPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const navigate = useNavigate();
  const fetchProducts = async () => {
    try {
      const response = await productService.getProducts();
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <Header />
      <Container>
        {products.map((item, index) => (
          <ProductContainer key={index}>
            <ProductCard onClick={() => navigate(`/product/${item._id}`)} />
            <ProductDetails>
              <ProductName> {item.name}</ProductName>
              <ProductPrice>${item.price}</ProductPrice>
            </ProductDetails>
          </ProductContainer>
        ))}
      </Container>
    </>
  );
};
