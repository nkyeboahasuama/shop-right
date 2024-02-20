import "./App.css";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { theme } from "./utils/theme";
import { LoginPage, WelcomePage } from "./ui/pages";
import { ProductsPage } from "./ui/pages/products-page";
import { SignUpPage } from "./ui/pages/signup-page";
import { ProductDetailPage } from "./ui/pages/product-detail-page";
import { CartPage } from "./ui/pages/cart-page";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />

          <Route path="/products" element={<ProductsPage />} />

          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
