import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  gap: 50px;
  width: 100vw;
  box-sizing: border-box;
  padding: 0px 100px;
`;

export const StepsContainer = styled.div`
  width: 100%;
  height: 5px;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background-color: gray; */
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
  height: 40px;
  width: 40px;
  background-color: ${(props) =>
    props.$completed ? "green" : props.$active ? "blue" : "gray"};
  color: white;
  border-radius: 50%;
  border: none;
`;

export const StepName = styled.div`
  font-size: 15px;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 10px;
`;

export const StepButton = styled.button`
  width: 30%;
  height: 45px;
  cursor: pointer;
`;
