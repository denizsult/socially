import type { RouteObject } from "react-router";
import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";

export const HomeRoute: RouteObject = {
  path: "/",
  element: Home(),
};

export const NotFoundRoute: RouteObject = {
  path: "*",
  element: NotFound(),
};


