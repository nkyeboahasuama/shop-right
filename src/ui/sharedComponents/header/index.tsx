import { useState } from "react";
import { Typography } from "../atoms";
import { CartIcon, HeaderContainer, UserIcon } from "./components";
import { useNavigate } from "react-router-dom";
import { UserInfoModal } from "../../modals/userInfoModal";
import { useAuthContext } from "../../../context/hooks/user/useAuthContext";
import { useCartContext } from "../../../context/hooks/cart/useCartContext";

export const Header = () => {
  const [showUserModal, setShowUserModal] = useState(false);
  const { cartItems } = useCartContext();
  const { state } = useAuthContext();

  const navigate = useNavigate();

  const handleCloseModal = () => {
    setShowUserModal(false);
  };
  return (
    <HeaderContainer>
      <Typography variant="h5" onClick={() => navigate("/")}>
        SHOP-RIGHT
      </Typography>
      <ul>
        <li className="active" onClick={() => navigate("/products")}>
          Shop
        </li>
        <li>About</li>
        <li>Contact</li>
        <div>
          <CartIcon onClick={() => navigate("/cart")} />
          <span>{cartItems.length}</span>
        </div>
        {state.user && (
          <UserIcon onClick={() => setShowUserModal(!showUserModal)} />
        )}
        {showUserModal && <UserInfoModal closeModal={handleCloseModal} />}
      </ul>
    </HeaderContainer>
  );
};
