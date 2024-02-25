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
import { IUser } from "../../../core/interface";
import { useState } from "react";
import { userService } from "../../../service/users/user.service";
import { useUserContext } from "../../../context/hooks";

export const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [password, setPassword] = useState<any>();

  const { setUserState } = useUserContext();
  const navigate = useNavigate();

  const newUserObject: IUser = {
    name: username,
    email: userEmail,
    password: password,
  };

  const handleNewUserSignUp = async () => {
    try {
      const results = await userService.createUser(newUserObject);
      if (!results) throw new Error("Called from sign up function");
      setUserState(results.data);
      navigate("/products");
    } catch (error) {
      console.log(error);
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

          <LoginButton onClick={handleNewUserSignUp}>Sign up</LoginButton>

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
