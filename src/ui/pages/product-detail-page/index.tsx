import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
import { productService } from "../../../service/products/product.service";
import { ICartItem, IProduct } from "../../../core/interface";
import { useCartContext } from "../../../context/hooks";

export const ProductDetailPage = () => {
  const [product, setProduct] = useState<IProduct>();
  const [quantity, setQuantity] = useState<number>(1);
  const [size, setSize] = useState<string>("");
  const { productId } = useParams();
  const { addToCart } = useCartContext();

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        if (!productId) return;
        const data = await productService.getProductDetails(productId);

        setProduct(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProductDetails();
  }, [productId]);

  const handleAddToCart = () => {
    if (!product) return;
    const cartItem: ICartItem = {
      product: product,
      quantity: quantity,
      selected_size: size,
    };
    addToCart(cartItem);
  };
  return (
    <>
      <Header />
      {!product ? (
        <div>Loading</div>
      ) : (
        <Container>
          <ProductDetails>
            <ProductInfoContainer>
              <ProductName>{product.name}</ProductName>
              <ProductPrice variant="h3">${product.price}</ProductPrice>
              <Typography variant="p">{product.description}</Typography>
            </ProductInfoContainer>
            <ProductSize>
              <label htmlFor="size">Size:</label>
              <select
                required
                onChange={(e) => setSize(e.target.value)}
                value={size}
              >
                <option>Select Size</option>
                {product.sizes.map((size) => (
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
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              />
            </ProductQuantity>
            <AddToCartButton onClick={handleAddToCart}>
              Add to cart
            </AddToCartButton>
          </ProductDetails>
          <ProductCard />
        </Container>
      )}
    </>
  );
};
