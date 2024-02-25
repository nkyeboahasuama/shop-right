import React from "react";
import { Typography } from "../atoms";
import { CartIcon, HeaderContainer, UserIcon } from "./components";
import { useNavigate } from "react-router-dom";
import { useCartContext, useUserContext } from "../../../context/hooks";

export const Header = () => {
  const { cartItems } = useCartContext();
  const { user } = useUserContext();

  const navigate = useNavigate();

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
        {user && <UserIcon />}
      </ul>
    </HeaderContainer>
  );
};
