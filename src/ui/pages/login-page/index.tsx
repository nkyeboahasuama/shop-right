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
import { useState } from "react";
import { userService } from "../../../service/users/user.service";
import { useUserContext } from "../../../context/hooks";
import { IUser } from "../../../core/interface";

export const LoginPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setUserPassword] = useState<any>("");

  const { setUserState, user } = useUserContext();

  const handleLogin = async () => {
    try {
      const results = await userService.loginUser(userEmail, password);
      if (!results) throw new Error("User error: Can not login user");
      setUserState(results.data);
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };
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
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <UserIcon />
          </InputContainer>

          <InputContainer>
            <UserInfoInput
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <LockIcon />
          </InputContainer>

          <LoginButton onClick={handleLogin}>Login</LoginButton>

          <PolicyTextContainer>
            <Typography variant="tiny" style={{ textAlign: "center" }}>
              By continuing, you agree to the <strong>Terms of Service</strong>{" "}
              and acknowledge that you've read our{" "}
              <strong>Privacy Policy</strong>.
            </Typography>

            <hr style={{ width: "70%", margin: "8px 0px" }} />

            <Typography variant="small">
              Don't have an account? <Link to={"/signup"}>Sign up</Link>
            </Typography>
          </PolicyTextContainer>
        </Content>
      </ContentContainer>
    </Container>
  );
};
