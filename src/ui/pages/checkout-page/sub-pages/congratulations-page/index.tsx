import { useCartContext } from "../../../../../context/hooks";
import { Typography } from "../../../../sharedComponents/atoms";
import {
  Container,
  ListItem,
  PageContainer,
  Section,
  Title,
} from "./components";

export const SuccessPage = () => {
  const { cartItems, cartItemsTotalPrice } = useCartContext();
  return (
    <Container>
      <PageContainer>
        <Title variant="h3">
          Order Confirmation: Thank You for Your Purchase!
        </Title>

        <Section>
          <Typography variant="h5">Order Details:</Typography>
          <p>Order Number: #1</p>
          <p>Date: 11/22/3444</p>
          <p>Total Amount: {cartItemsTotalPrice()}</p>
        </Section>

        <Section>
          <Typography variant="h5">Shipping Information:</Typography>

          <p>Shipping Address: 3232 dgdd dvd</p>
          <p>Expected Delivery Date: 22/45/3334</p>
        </Section>

        <Section>
          <Typography variant="h5">Items Purchased:</Typography>
          <ul>
            {cartItems.map((item, index) => (
              <ListItem key={index}>{item.product.name}</ListItem>
            ))}
          </ul>
        </Section>

        <Section>
          <Typography variant="h5">Payment Information:</Typography>
          <p>Payment Method: Debit card</p>
          <p>Billing Address: 222 Falcon Ave</p>
          <p>Transaction ID: ewbrj3rk3jferjerbej</p>
        </Section>

        <Section>
          <p>You will receive an email confirmation shortly.</p>
          <Typography variant="small">
            For any inquiries regarding your order, please contact our customer
            support team.
          </Typography>
        </Section>

        <Section>
          <Typography variant="small">
            Thank you for choosing Shop-Right! We appreciate your business and
            hope you enjoy your purchase.
          </Typography>
        </Section>
      </PageContainer>
    </Container>
  );
};
