import { Header } from "../../sharedComponents";
import { Typography } from "../../sharedComponents/atoms";
import { Container } from "./components";

import { STEPS_CONFIG } from "./steps";
import { CheckoutStepper } from "./checkoutStepper/CheckoutStepper";

export const CheckoutPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Typography variant="h3">Checkout</Typography>
        <CheckoutStepper stepsConfig={STEPS_CONFIG} />
      </Container>
    </>
  );
};
