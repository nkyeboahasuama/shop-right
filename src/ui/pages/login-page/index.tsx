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
import { FormEvent, useEffect, useState } from "react";
import { useAuthContext, useAuthentication } from "../../../context/hooks";
import { IUser } from "../../../core/interface";

export const LoginPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setUserPassword] = useState<any>("");
  const [loading, setLoading] = useState(false);

  const { loginUser, isLoading, error } = useAuthentication();
  const { state } = useAuthContext();
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    const user: IUser = { email: userEmail, password };
    await loginUser(user);
  };

  useEffect(() => {
    state.user && navigate("/products");
  }, [state.user?.email]);
  return (
    <Container>
      <ContentContainer>
        <Typography variant="h4">Welcome to Shop-Right</Typography>

        <Content>
          <InputContainer>
            <UserInfoInput
              required
              type="text"
              name="email"
              placeholder="example@email.com"
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <UserIcon />
          </InputContainer>

          <InputContainer>
            <UserInfoInput
              required
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <LockIcon />
          </InputContainer>

          <LoginButton onClick={handleLogin}>
            {loading ? "Wait..." : "Login"}
          </LoginButton>

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
      {error && <div>{error}</div>}
    </Container>
  );
};
