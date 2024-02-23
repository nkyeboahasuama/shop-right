import styled from "styled-components";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

export const HeaderContainer = styled.header`
  height: 100px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  box-sizing: content-box;
  padding: 20px;
  color: ${(props) => props.theme.colors.secondary};

  h5 {
    cursor: pointer;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 40px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 15px;

    li {
      padding: 5px;
      cursor: pointer;
    }

    .active {
      text-decoration: underline;
      text-underline-offset: calc(30%);
    }
  }
`;

export const CartIcon = styled(PiShoppingCartSimpleFill)`
  font-size: 25px;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;
