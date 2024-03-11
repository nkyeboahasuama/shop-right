import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  box-sizing: border-box;
  padding: 0px 15% 100px 15%;
`;

export const StepsContainer = styled.div`
  width: 100%;
  height: 5px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
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
`;

export const StepName = styled.div`
  font-size: 12px;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: flex-end;
  gap: 10px;
`;

export const NextButton = styled.button`
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

export const PreviousButton = styled.button`
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

  &:disabled {
    background-color: gray;
    color: whitesmoke;
    cursor: not-allowed;
  }
`;
