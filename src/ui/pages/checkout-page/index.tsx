import React, { useState } from "react";
import { Header } from "../../sharedComponents";
import { Typography } from "../../sharedComponents/atoms";
import {
  ButtonsContainer,
  Container,
  NextButton,
  PreviousButton,
  Step,
  StepName,
  StepNumber,
  StepsContainer,
} from "./components";

import { BiCheck } from "react-icons/bi";
import {
  PaymentPage,
  ReviewPage,
  ShippingPage,
  SummaryPage,
} from "./sub-pages";

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

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === 1) {
        return prevStep;
      } else {
        return prevStep - 1;
      }
    });
  };

  return (
    <>
      <Header />
      <Container>
        <Typography variant="h3">Checkout</Typography>
        <StepsContainer>
          {stepsConfig.map((step, index) => (
            <Step key={index}>
              <StepNumber
                $active={currentStep === index + 1}
                $completed={currentStep > index + 1 || isLastStep}
              >
                {currentStep > index + 1 || isLastStep ? (
                  <BiCheck size={18} />
                ) : (
                  index + 1
                )}
              </StepNumber>
              <StepName>{step.name}</StepName>
            </Step>
          ))}
        </StepsContainer>

        <div>{stepsConfig[currentStep - 1].component}</div>
        <ButtonsContainer>
          {currentStep !== 1 && (
            <PreviousButton onClick={handlePreviousStep}>
              Previous
            </PreviousButton>
          )}

          {!isLastStep && (
            <NextButton onClick={handleNextStep}>
              {currentStep === stepsConfig.length ? "Finish" : "Continue"}
            </NextButton>
          )}
        </ButtonsContainer>
      </Container>
    </>
  );
};
