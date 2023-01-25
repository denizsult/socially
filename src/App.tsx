import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes";

function App(): JSX.Element {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
