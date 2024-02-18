import { FaLock, FaUser } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const ContentContainer = styled.div`
  box-sizing: border-box;
  padding: 60px;
  width: 420px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  box-shadow: 1px 3px 4px black;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 2px solid red; */
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 45px;
  margin: 10px 0px 20px;
`;

export const UserInfoInput = styled.input`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 20px;
  border: none;
  outline: none;
  font-size: medium;
  background: transparent;
  border: 2px white solid;
  padding: 0px 30px 0px 15px;
  color: white;
  font-size: 15px;

  &::placeholder {
    color: white;
    opacity: 50%;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 45px;
  padding: 10px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  margin: 10px 0px;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
  }
`;

export const UserIcon = styled(FaUser)`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  color: white;
`;

export const LockIcon = styled(FaLock)`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  color: whitesmoke;
`;

export const PolicyTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: ${(props) => props.theme.colors.primary};
    font-weight: 500;
  }
`;
