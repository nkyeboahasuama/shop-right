import React from "react";
import { Typography } from "../atoms";
import { HeaderContainer } from "./components";
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
        <li>Cart</li>
      </ul>
    </HeaderContainer>
  );
};
