import styled from "styled-components";

// Styled components
export const PaymentContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
`;

export const PaymentForm = styled.form`
  display: grid;
  grid-gap: 20px;
`;

export const PaymentInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
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
