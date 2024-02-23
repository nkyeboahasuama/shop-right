import React from "react";
import { Typography } from "../atoms";
import { CartIcon, HeaderContainer } from "./components";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <Typography variant="h5" onClick={() => navigate("/")}>
        SHOP-RIGHT
      </Typography>
      <ul>
        <li className="active">Shop</li>
        <li>About</li>
        <li>Contact</li>
        <div>
          <CartIcon onClick={() => navigate("/cart")} />
          <span>0</span>
        </div>
      </ul>
    </HeaderContainer>
  );
};
