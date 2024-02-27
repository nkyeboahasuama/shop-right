import { Link, useNavigate } from "react-router-dom";
import { Typography } from "../../sharedComponents/atoms";
import {
  Container,
  ContentContainer,
  Content,
  UserInfoInput,
  UserIcon,
  InputContainer,
  LockIcon,
  PolicyTextContainer,
  SignUpButton,
} from "./components";
import { IUser } from "../../../core/interface";
import { useState } from "react";
import { useAuthContext, useAuthentication } from "../../../context/hooks";

export const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [password, setPassword] = useState<any>();

  const { signUp, isLoading, error } = useAuthentication();
  const { state } = useAuthContext();
  const navigate = useNavigate();

  const newUserObject: IUser = {
    name: username,
    email: userEmail,
    password: password,
  };

  const handleNewUserSignUp = async () => {
    await signUp(newUserObject);
    if (state.user !== null) {
      console.log(state.user);
      state.user && navigate("/products");
    } else {
      return;
    }
  };
  return (
    <Container>
      <ContentContainer>
        <Typography variant="h4">Welcome to Shop-Right</Typography>

        <Content>
          <InputContainer>
            <UserInfoInput
              type="text"
              name="name"
              placeholder="Choose a username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <UserIcon />
          </InputContainer>

          <InputContainer>
            <UserInfoInput
              type="text"
              name="email"
              placeholder="example@email.com"
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <UserIcon />
          </InputContainer>

          <InputContainer>
            <UserInfoInput
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <LockIcon />
          </InputContainer>

          <SignUpButton onClick={handleNewUserSignUp} disabled={isLoading}>
            Sign up
          </SignUpButton>

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
      {error && <div>{error}</div>}
    </Container>
  );
};
