import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AboutComponent } from "./pages/About";
import { InputComponent } from "./pages/Input";
import { RecallComponent } from "./pages/Recall";
import { SitenoticeComponent } from "./pages/Sitenotice";

//create router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <AboutComponent />,
  },
  {
    path: "/input",
    element: <InputComponent />,
  },
  {
    path: "/recall",
    element: <RecallComponent />,
  },
  {
    path: "/sitenotice",
    element: <SitenoticeComponent />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
