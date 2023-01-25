import { createBrowserRouter } from "react-router-dom";
import { HomeRoute, NotFoundRoute } from "./common";
import authRoutes from "./auth";

const router = createBrowserRouter([HomeRoute, NotFoundRoute, authRoutes]);

export default router;
