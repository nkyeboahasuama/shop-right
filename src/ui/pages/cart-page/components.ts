import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
  gap: 20px;
  padding: 20px 100px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: white;

  h4 {
    font-weight: 400;
  }
`;

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
`;

export const SubtotalContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CheckoutButton = styled.button`
  width: 30%;
  height: 45px;
  cursor: pointer;
`;
