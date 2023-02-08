import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,  Navigate,  RouterProvider } from "react-router-dom";
import App from "./App";
 
import ErrorPage from "./components/ErrorPage";

import Products from "./pages/Products";
import Services from "./pages/Services";
import SignUp from "./pages/SignUp";


const router = createBrowserRouter([
  {
    path: "/trvl",
    element: <App />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  // {
  //   path: "*",
  //   element: <ErrorPage />,
  // }
  {
    path: "/404",
    element: <ErrorPage />,
  },
  {
    path: "*",
    element:  <Navigate to='/404' replace /> ,
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
