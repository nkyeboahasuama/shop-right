import { Link, useNavigate } from "react-router-dom";
import { Typography } from "../../sharedComponents/atoms";
import {
  Container,
  ContentContainer,
  Content,
  UserInfoInput,
  LoginButton,
  UserIcon,
  InputContainer,
  LockIcon,
  PolicyTextContainer,
} from "./components";

export const SignUpPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <ContentContainer>
        <Typography variant="h4">Welcome to Shop-Right</Typography>

        <Content>
          <InputContainer>
            <UserInfoInput
              type="text"
              name="email"
              placeholder="example@email.com"
            />
            <UserIcon />
          </InputContainer>

          <InputContainer>
            <UserInfoInput
              type="password"
              name="password"
              placeholder="Password"
            />
            <LockIcon />
          </InputContainer>

          <LoginButton onClick={() => navigate("/products")}>
            Sign up
          </LoginButton>

          <PolicyTextContainer>
            <Typography variant="tiny" style={{ textAlign: "center" }}>
              By continuing, you agree to the <strong>Terms of Service</strong>{" "}
              and acknowledge that you've read our{" "}
              <strong>Privacy Policy</strong>.
            </Typography>

            <hr style={{ width: "70%", margin: "8px 0px" }} />

            <Typography variant="small">
              Already have an account? <Link to={"/login"}>Log in</Link>
            </Typography>
          </PolicyTextContainer>
        </Content>
      </ContentContainer>
    </Container>
  );
};
