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
export const ProductDetailPage = () => {
  return (
    <>
      <Header />
      <Container>
        <ProductDetails>
          <ProductInfoContainer>
            <ProductName>Product Name</ProductName>
            <ProductPrice variant="h3">$1290</ProductPrice>
            <Typography variant="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              voluptas aperiam omnis impedit quis labore sapiente?
            </Typography>
          </ProductInfoContainer>
          <ProductSize>
            <label htmlFor="size">Size:</label>
            <select>
              <option>Select Size</option>
              <option value="large">Large</option>
              <option value="medium">Medium</option>
              <option value="small">Small</option>
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
