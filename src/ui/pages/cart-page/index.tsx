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

export const CartPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Container>
        <Typography variant="h4">Shopping Cart</Typography>
        {[1, 2].map((cartItem) => (
          <CartItemComponent />
        ))}
        <CheckoutContainer>
          <SubtotalContainer>
            <Typography variant="p">Subtotal</Typography>
            <Typography variant="h4">$240</Typography>
          </SubtotalContainer>
          <CheckoutButton onClick={() => navigate("/checkout")}>
            Checkout
          </CheckoutButton>
        </CheckoutContainer>
      </Container>
    </>
  );
};
