import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #093d44;
  box-sizing: border-box;
  padding: 0px 50px;
  overflow: hidden;
`;

export const Header = styled.header`
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gainsboro;
`;

export const ContentContainer = styled.div`
  position: relative;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentText = styled.div`
  width: 40%;
  line-height: 75px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  color: whitesmoke;

  h1 {
    font-size: 80px;
    font-weight: 600;
  }
  h4 {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const ContentImage = styled.div`
  background-image: url("https://i.pinimg.com/originals/04/76/8c/04768ce51fa5222fd0e5ec2b499196eb.gif");
  position: absolute;
  right: 10px;
  bottom: -50px;
  width: 50%;
  height: 100%;
  border: 2px solid blue;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20% 20% 0px 0px;
`;

export const ShopNowButton = styled.button`
  width: 150px;
  padding: 10px;
  margin: 30px 0px;
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
  color: white;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 0px 60px 30px 80px;

  transition: background-color 0.3s ease;
  transition: border-radius 0.3s ease;

  &:hover {
    background-color: gainsboro;
    color: ${(props) => props.theme.colors.secondary};
    border-radius: 30px 80px 0px 60px;
  }
`;

export const GetStartedButton = styled.button`
  background-color: white;
  color: ${(props) => props.theme.colors.secondary};
  padding: 20px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: gainsboro;
  }
`;
