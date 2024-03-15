import {
  LongWidthContainer,
  PaymentContainer,
  PaymentForm,
  PaymentInput,
} from "./components";
import { Typography } from "../../../../sharedComponents/atoms";

export const PaymentPage = () => {
  const handlePaymentSubmit = () => {};

  return (
    <PaymentContainer>
      <Typography variant="h4">Payment Information</Typography>
      <PaymentForm onSubmit={handlePaymentSubmit}>
        <LongWidthContainer>
          <label htmlFor="cardNumber">Card Number</label>
          <PaymentInput type="text" id="cardNumber" required />
        </LongWidthContainer>

        <LongWidthContainer>
          <label htmlFor="expiryDate">Expiry Date</label>
          <PaymentInput type="text" id="expiryDate" required />
        </LongWidthContainer>

        <LongWidthContainer>
          <label htmlFor="cvv">CVV</label>
          <PaymentInput type="text" id="cvv" required />
        </LongWidthContainer>

        {/* <PaymentButton type="submit">Make Payment</PaymentButton> */}
      </PaymentForm>
    </PaymentContainer>
  );
};
