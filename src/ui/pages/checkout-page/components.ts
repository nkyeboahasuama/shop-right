import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  box-sizing: border-box;
  padding: 0px 15% 100px 15%;
`;

export const CheckoutStepperContainer = styled.div``;

export const StepsContainer = styled.div`
  position: relative;

  width: 100%;
  height: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StepLine = styled.div<{ $progressLineWidth: number }>`
  position: absolute;
  z-index: -1;

  background-color: ${(props) => props.theme.colors.secondary};
  height: 3px;
  width: ${(props) => props.$progressLineWidth}%;
  border-radius: 5px;
  transition: width 0.4s ease-in;
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StepNumber = styled.div<{ $active: boolean; $completed: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
  background-color: ${(props) =>
    props.$completed
      ? props.theme.colors.secondary
      : props.$active
      ? "green"
      : "gray"};
  color: white;
  border-radius: 50%;
  border: none;

  transition: background-color 0.4s ease-in;
`;

export const StepName = styled.div`
  position: absolute;
  bottom: -10px;
  font-size: 12px;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: flex-end;
  gap: 10px;
  margin: 20px 0px;
`;

export const NavigationButton = styled.button`
  width: 20%;
  height: 45px;
  cursor: pointer;
  color: white;
  padding: 0px 5px;
  transition: background-color ease 0.3s, color ease 0.3s;

  background-color: ${(props) => props.theme.colors.secondary};
  &:hover {
    background-color: whitesmoke;
    color: ${(props) => props.theme.colors.secondary};
  }
`;
