import styled from "styled-components";

// Styled components
export const PaymentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  h4 {
    width: 100%;
    text-align: left;
    margin: 10px 0px;
  }
`;

export const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`;

export const PaymentInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 40px;
  padding: 0px 5px;
`;

export const PaymentButton = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: #fff;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;

  transition: background-color ease 0.3s, color ease 0.3s;

  &:hover {
    background-color: whitesmoke;
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const LongWidthContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
