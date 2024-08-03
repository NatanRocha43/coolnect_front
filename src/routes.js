import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import "./index.css";
import Cadastro from './pages/cadastro'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
]);

export default router;
