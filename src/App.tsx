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
import { CartContextProvider } from "./context/cart-context";
import { UserContextProvider } from "./context/user-context";
import { useAuthContext } from "./context/hooks";

function App() {
  const { state } = useAuthContext();
  const routes = [
    {
      path: "/admin",
      element: <AdminPage />,
    },

    {
      path: "/products",
      element: <ProductsPage />,
    },
    {
      path: "/product/:productId",
      element: <ProductDetailPage />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
    {
      path: "/checkout",
      element: <CheckoutPage />,
    },
  ];

  const requireAuthRoutes = [
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
              {requireAuthRoutes.map(
                (route, index) =>
                  !state.user && (
                    <Route
                      key={index}
                      path={route.path}
                      element={route.element}
                    />
                  )
              )}
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;
