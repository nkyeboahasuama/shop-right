import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: 100vw;
  box-sizing: border-box;
  /* background-color: red; */
`;

export const StepsContainer = styled.div`
  width: 100%;
  height: 5px;
  margin-top: 20px;
  background-color: gray;
  display: flex;
  justify-content: space-around;
  align-items: center;
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
  height: 50px;
  width: 50px;
  background-color: ${(props) =>
    props.$completed ? "green" : props.$active ? "blue" : "gray"};
  border-radius: 50%;
  border: none;
`;

export const StepName = styled.div``;

export const StepButton = styled.button`
  width: 30%;
  height: 45px;
  cursor: pointer;
`;
