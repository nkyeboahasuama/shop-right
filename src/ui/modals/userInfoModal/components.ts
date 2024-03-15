import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 45px;
  right: 60px;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.primary};
  z-index: 2;

  p {
    text-transform: capitalize;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const UserIcon = styled.div`
  height: 90px;
  width: 90px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserName = styled.div`
  text-transform: capitalize;
  font-size: 20px;
`;
export const UserEmail = styled.div`
  text-transform: lowercase;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const LogoutButton = styled.button`
  cursor: pointer;
  margin: 5px;
  padding: 3px 5px;
  border-radius: 5px;
  border: none;

  &:hover {
    background-color: gray;
    color: white;
  }
`;
