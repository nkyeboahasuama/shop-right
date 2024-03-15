import { useCartContext } from "../../../../../context/hooks";
import { Typography } from "../../../../sharedComponents/atoms";
import {
  Container,
  ItemCard,
  OrderSummaryContainer,
  ReviewContainer,
  Section,
  SignatureInput,
  Title,
} from "./components";

export const ReviewPage = () => {
  const { cartItems, cartItemPrice, cartItemsTotalPrice } = useCartContext();

  return (
    <Container>
      <Typography variant="h4">Purchase & Review</Typography>
      <ReviewContainer>
        <Section>
          <Title>Order Summary</Title>
          <OrderSummaryContainer>
            {cartItems.map((cartItem, index) => (
              <ItemCard key={index}>
                <p>{cartItem.product.name}</p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>Qty: {cartItem.quantity}</p>
                  <strong>${cartItemPrice(cartItem)}</strong>
                </div>
              </ItemCard>
            ))}
          </OrderSummaryContainer>
          <hr />
          <ItemCard>
            <p>
              <strong>Subtotal</strong>: ${cartItemsTotalPrice()}
            </p>
            <p>
              <strong>Tax</strong>: $0.98
            </p>
            <p>
              <strong>Total</strong>: ${cartItemsTotalPrice() - 0.98}
            </p>
          </ItemCard>
        </Section>

        <Section>
          <Title>Shipping Details</Title>
          <div>
            <strong>Nana Yeboah-Asuama</strong>
            <p>200 Fally Avenue</p>
            <p>Iowa City, Iowa, 20045</p>
            <p>United States</p>
            <p>+223 455 333 4556</p>
            <p>nkay@gmail.com</p>
          </div>
        </Section>

        <Section>
          <Title>Payment Method</Title>
          <div>
            <p>Credit card</p>
          </div>
        </Section>

        <Section>
          <Title>Signature</Title>
          <SignatureInput type="text" placeholder="Your full name" />
        </Section>
      </ReviewContainer>
    </Container>
  );
};
