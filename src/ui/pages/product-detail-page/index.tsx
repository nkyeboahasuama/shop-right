import { Header } from "../../sharedComponents";
import {
  AddToCartButton,
  Container,
  ProductCard,
  ProductDetails,
  ProductInfoContainer,
  ProductName,
  ProductPrice,
  ProductQuantity,
  ProductSize,
  SelectArrowDown,
} from "./components";
import { Typography } from "../../sharedComponents/atoms";
import { useParams } from "react-router-dom";
import { productService } from "../../../service/products/product.service";
import { useEffect, useState } from "react";
import { IProduct } from "../../../core/interface";

export const ProductDetailPage = () => {
  const [product, setProduct] = useState<IProduct>();
  const { productId } = useParams();

  useEffect(() => {
    getProductDetails();
  }, [productId]);

  const getProductDetails = async () => {
    try {
      if (!productId) return;
      const data = await productService.getProductDetails(productId);
      setProduct(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header />
      <Container>
        <ProductDetails>
          <ProductInfoContainer>
            <ProductName>{product?.name}</ProductName>
            <ProductPrice variant="h3">$1290</ProductPrice>
            <Typography variant="p">{product?.description}</Typography>
          </ProductInfoContainer>
          <ProductSize>
            <label htmlFor="size">Size:</label>
            <select>
              <option>Select Size</option>
              {product?.sizes?.map((size) => (
                <option value={size} key={size}>
                  {size}
                </option>
              ))}
            </select>
            <SelectArrowDown />
          </ProductSize>
          <ProductQuantity>
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              name="quantity"
              min={1}
              max={5}
              //   value={quantity}
            />
          </ProductQuantity>
          <AddToCartButton>Add to cart</AddToCartButton>
        </ProductDetails>
        <ProductCard />
      </Container>
    </>
  );
};
