import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import "./index.scss";
import Cadastro from './pages/cadastro'
import Login from "./pages/login/Login";
import Main from "./pages/feed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/feed",
    element: <Main />,
  }
]);

export default router;
