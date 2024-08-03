import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import "./index.scss";
import Cadastro from './pages/cadastro'
import Main from "./pages/feed";
import Login from "./pages/login";
import RedefinirSenha from "./pages/redefinir";

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
    path: "/redefinir-senha",
    element: <RedefinirSenha />,
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
