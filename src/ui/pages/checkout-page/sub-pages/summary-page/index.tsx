import React from "react";
import {
  Container,
  EditButton,
  Table,
  TableBody,
  TableData,
  TableHead,
  TableOrderTotal,
  TableRow,
} from "./components";
import { Typography } from "../../../../sharedComponents/atoms";
import { useCartContext } from "../../../../../context/hooks";
import { useNavigate } from "react-router-dom";

export const SummaryPage = () => {
  const { cartItems, cartItemsTotalPrice } = useCartContext();

  const navigate = useNavigate();
  return (
    <Container>
      <Typography variant="h4">Order Summary</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableData>Product</TableData>
            <TableData>Quantity</TableData>
            <TableData>Unit Price</TableData>
            <TableData>Subtotal</TableData>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((cartItem, index) => (
            <TableRow key={index}>
              <TableData>{cartItem.product.name}</TableData>
              <TableData>x {cartItem.quantity}</TableData>
              <TableData>$ {cartItem.product.price}</TableData>
              <TableData>
                $ {cartItem.product.price * cartItem.quantity}
              </TableData>
            </TableRow>
          ))}
        </TableBody>

        <TableOrderTotal>
          <td></td>
          <td></td>
          <TableData>Total order price:</TableData>
          <TableData>$ {cartItemsTotalPrice()}</TableData>
        </TableOrderTotal>
      </Table>
      <EditButton onClick={() => navigate("/cart")}>Edit</EditButton>
    </Container>
  );
};
