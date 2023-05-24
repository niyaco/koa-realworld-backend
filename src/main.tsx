import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ToDoList from "./pages/home";

import './assets/style/index.css';
import 'tdesign-react/dist/reset.css';
import "tdesign-react/es/style/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ToDoList />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
