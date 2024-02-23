import "./App.css";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { theme } from "./utils/theme";
import {
  AdminPage,
  CartPage,
  CheckoutPage,
  LoginPage,
  ProductDetailPage,
  ProductsPage,
  SignUpPage,
  WelcomePage,
} from "./ui/pages";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />

          <Route path="/products" element={<ProductsPage />} />

          <Route path="/product/:productId" element={<ProductDetailPage />} />

          <Route path="/cart" element={<CartPage />} />

          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
