import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// This test is failing because the App component is not returning anything.
// write me a test that will pass.
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
