import React, { useState } from "react";
import {
  ButtonsContainer,
  CheckoutStepperContainer,
  NavigationButton,
  Step,
  StepLine,
  StepName,
  StepNumber,
  StepsContainer,
} from "../components";
import { BiCheck } from "react-icons/bi";
import { SuccessPage } from "../sub-pages";
import { useNavigate } from "react-router-dom";

interface ICheckoutStepperProps {
  stepsConfig: {
    name: string;
    component: () => JSX.Element;
  }[];
}

export const CheckoutStepper: React.FC<ICheckoutStepperProps> = ({
  stepsConfig,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLastStep, setIsLastStep] = useState(false);
  const navigate = useNavigate();

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

  const handleBackToHome = () => {
    navigate("/products");
  };

  const progressLineWidth =
    ((currentStep - 1) / (stepsConfig.length - 1)) * 100;

  const ActiveComponent = isLastStep
    ? SuccessPage
    : stepsConfig[currentStep - 1].component;
  return (
    <CheckoutStepperContainer>
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
        <StepLine $progressLineWidth={progressLineWidth}></StepLine>
      </StepsContainer>

      <ActiveComponent />

      <ButtonsContainer>
        {currentStep !== 1 && !isLastStep && (
          <NavigationButton onClick={handlePreviousStep}>
            Previous
          </NavigationButton>
        )}

        {!isLastStep ? (
          <NavigationButton onClick={handleNextStep}>
            {currentStep === stepsConfig.length ? "Finish" : "Continue"}
          </NavigationButton>
        ) : (
          <NavigationButton onClick={handleBackToHome}>
            Go Shopping
          </NavigationButton>
        )}
      </ButtonsContainer>
    </CheckoutStepperContainer>
  );
};
