import React, { useState } from "react";
import { Header } from "../../sharedComponents";
import { Typography } from "../../sharedComponents/atoms";
import {
  ButtonsContainer,
  Container,
  Step,
  StepButton,
  StepName,
  StepNumber,
  StepsContainer,
} from "./components";
import { ShippingPage } from "./sub-pages/ShippingPage";
import { PaymentPage } from "./sub-pages/PaymentPage";
import { ReviewPage } from "./sub-pages/ReviewPage";
import { BiCheck } from "react-icons/bi";
import { SummaryPage } from "./sub-pages";
import { useNavigate } from "react-router-dom";

export const CheckoutPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLastStep, setIsLastStep] = useState(false);
  const navigate = useNavigate();
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
        <Typography variant="h3">Checkout</Typography>
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

        <div>{stepsConfig[currentStep - 1].component}</div>
        <ButtonsContainer>
          {!isLastStep && (
            <StepButton onClick={handleNextStep}>
              {currentStep === stepsConfig.length ? "Finish" : "Continue"}
            </StepButton>
          )}
        </ButtonsContainer>
      </Container>
    </>
  );
};
