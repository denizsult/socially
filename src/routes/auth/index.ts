import type { RouteObject } from "react-router-dom";
import { Register } from "../../pages/auth/Register";

const RegisterRoute = (): RouteObject => {
  return {
    path: "/register",
    element: Register(),
  };
};

export default RegisterRoute();
