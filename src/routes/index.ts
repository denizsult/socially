import { createBrowserRouter } from "react-router-dom";
import { HomeRoute, NotFoundRoute } from "./common";

const router = createBrowserRouter([HomeRoute, NotFoundRoute]);

export default router;
