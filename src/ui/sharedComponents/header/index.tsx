import React from "react";
import { Typography } from "../atoms";
import { CartIcon, HeaderContainer } from "./components";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../../context/hooks";

export const Header = () => {
  const { cartItemsNumber } = useCartContext();

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
          <span>{cartItemsNumber}</span>
        </div>
      </ul>
    </HeaderContainer>
  );
};
