import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./products/ProductPage.jsx";
import RootLayout from "./Layout/RootLayout.jsx";
import ProductDetailsPage from "./products/ProductDetailsPage.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import CartPage from "./Cart/CartPage/CartPage.jsx";

const routerPaths = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <ProductPage /> },
      { path: "/productDetails/:name", element: <ProductDetailsPage /> },
      { path: "/cart", element: <CartPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={routerPaths} />
  </Provider>
);
