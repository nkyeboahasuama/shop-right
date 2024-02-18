import { useNavigate } from "react-router-dom";
import { Typography } from "../../sharedComponents/atoms";
import {
  Container,
  ContentContainer,
  ContentImage,
  ContentText,
  Header,
  GetStartedButton,
  ShopNowButton,
} from "./component";

export const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header>
        <Typography variant="h3">SHOP-RIGHT</Typography>
        <GetStartedButton>GET STARTED</GetStartedButton>
      </Header>
      <ContentContainer>
        <ContentText>
          <Typography variant="h4">BUY ANYTHING</Typography>
          <Typography variant="h1">
            Everything at its lowest and affordable prices
          </Typography>
          <ShopNowButton onClick={() => navigate("/login")}>
            Shop Now
          </ShopNowButton>
        </ContentText>
        <ContentImage />
      </ContentContainer>
    </Container>
  );
};
