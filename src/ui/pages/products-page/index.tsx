import {
  Container,
  ProductCard,
  ProductContainer,
  ProductDetails,
  ProductName,
  ProductPrice,
} from "./components";
import { Header, Loader } from "../../sharedComponents";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { productService } from "../../../service/products/product.service";
import { IProduct } from "../../../core/interface";

export const ProductsPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const fetchProducts = async () => {
    try {
      const response = await productService.getProducts();
      if (response.status === 200) {
        setLoading(false);

        setProducts(response.data);
      } else {
        setLoading(false);
        return <div>{response.data.message}</div>;
      }
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

      {loading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};
