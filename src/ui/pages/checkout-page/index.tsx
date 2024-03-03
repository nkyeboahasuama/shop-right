import React, { useState } from "react";
import { Header } from "../../sharedComponents";
import { Typography } from "../../sharedComponents/atoms";
import {
  Container,
  Step,
  StepButton,
  StepName,
  StepNumber,
  StepsContainer,
} from "./components";
import { SummaryPage } from "./sub-pages/SummaryPage";
import { ShippingPage } from "./sub-pages/ShippingPage";
import { PaymentPage } from "./sub-pages/PaymentPage";
import { ReviewPage } from "./sub-pages/ReviewPage";
import { BiCheck } from "react-icons/bi";

export const CheckoutPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLastStep, setIsLastStep] = useState(false);

  const stepsConfig = [
    {
      name: "Summary",
      component: <SummaryPage />,
    },
    {
      name: "Shipping Info",
      component: <ShippingPage />,
    },
    {
      name: "Payment",
      component: <PaymentPage />,
    },
    {
      name: "Review & Purchase",
      component: <ReviewPage />,
    },
  ];

  const handleNextStep = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === stepsConfig.length) {
        setIsLastStep(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  console.log(currentStep);

  return (
    <>
      <Header />
      <Container>
        <Typography variant="h4">Checkout</Typography>
        <StepsContainer>
          {stepsConfig.map((step, index) => (
            <Step key={index}>
              <StepNumber
                $active={currentStep === index + 1}
                $completed={currentStep > index + 1 || isLastStep}
              >
                {currentStep > index + 1 || isLastStep ? (
                  <BiCheck />
                ) : (
                  index + 1
                )}
              </StepNumber>
              <StepName>{step.name}</StepName>
            </Step>
          ))}
        </StepsContainer>
        {!isLastStep && (
          <StepButton onClick={handleNextStep}>
            {currentStep === stepsConfig.length ? "Finish " : "Next"}
          </StepButton>
        )}
        <div>{stepsConfig[currentStep - 1].component}</div>
        {/* <LeftContainer>
          <EmailContainer>
            <input placeholder="Email"/>
            <Typography variant="small">You'll recieve receipts and notifications at this email address</Typography>
            <button>Continue</button>
          </EmailContainer>
        </LeftContainer>
        <RightContainer>
          <OrderSummary>

          </OrderSummary>
        </RightContainer> */}
      </Container>
    </>
  );
};
