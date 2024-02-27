import { Header } from "../../sharedComponents";
import { Typography } from "../../sharedComponents/atoms";
import {
  CheckoutButton,
  CheckoutContainer,
  Container,
  SubtotalContainer,
} from "./components";

import { CartItemComponent } from "../../components";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../../context/hooks";

export const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, cartItemsTotalPrice } = useCartContext();
  return (
    <>
      <Header />
      <Container>
        <Typography variant="h4">Shopping Cart</Typography>
        {cartItems.map((cartItem) => (
          <CartItemComponent key={cartItem.product._id} cartItem={cartItem} />
        ))}
        <CheckoutContainer>
          <SubtotalContainer>
            <Typography variant="p">Subtotal</Typography>
            <Typography variant="h4">${cartItemsTotalPrice()}</Typography>
          </SubtotalContainer>
          <CheckoutButton onClick={() => navigate("/checkout")}>
            Checkout
          </CheckoutButton>
        </CheckoutContainer>
      </Container>
    </>
  );
};
