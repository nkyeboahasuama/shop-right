import { Typography } from "../../sharedComponents/atoms";
import {
  Container,
  Content,
  LogoutButton,
  Overlay,
  UserEmail,
  UserIcon,
  UserName,
} from "./components";

interface IUserInfoModal {
  closeModal: () => void;
}
export const UserInfoModal: React.FC<IUserInfoModal> = ({ closeModal }) => {
  return (
    <Container>
      <Overlay onClick={closeModal}></Overlay>
      <Content>
        <UserIcon />
        <UserName>Nana</UserName>
        <UserEmail>ahhs@gamamil.com</UserEmail>
        <Typography variant="small">Manage account</Typography>
        <LogoutButton>Logout</LogoutButton>
      </Content>
    </Container>
  );
};
