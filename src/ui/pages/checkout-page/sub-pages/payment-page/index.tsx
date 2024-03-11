import {
  PaymentButton,
  PaymentContainer,
  PaymentForm,
  PaymentInput,
} from "./components";
import { Typography } from "../../../../sharedComponents/atoms";

// PaymentPage component
export const PaymentPage = () => {
  const handlePaymentSubmit = () => {
    // e.preventDefault();
    // Handle payment logic here
  };

  return (
    <PaymentContainer>
      <h2>Payment Information</h2>
      <PaymentForm onSubmit={handlePaymentSubmit}>
        <label htmlFor="cardNumber">Card Number</label>
        <PaymentInput type="text" id="cardNumber" required />

        <label htmlFor="expiryDate">Expiry Date</label>
        <PaymentInput type="text" id="expiryDate" required />

        <label htmlFor="cvv">CVV</label>
        <PaymentInput type="text" id="cvv" required />

        {/* <PaymentButton type="submit">Make Payment</PaymentButton> */}
      </PaymentForm>
    </PaymentContainer>
  );
};
