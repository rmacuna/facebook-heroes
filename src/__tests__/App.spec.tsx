/**
 * @jest-environment jsdom
 */

import React from "react";

import { render, screen } from "@testing-library/react";

import App from "../pages/index";

describe("App", () => {
  it("should render without crashing ", () => {
    render(<App />);
    expect(screen.getByRole("button", { name: "Log In" })).toBeInTheDocument();
  });
});
