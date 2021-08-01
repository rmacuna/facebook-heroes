/**
 * @jest-environment jsdom
 */

import React from "react";

import { render, screen } from "@testing-library/react";

import RecoverPassword from "../pages/password-recover";

it("Should render the Recover Page", () => {
  render(<RecoverPassword />);
  expect(screen.getByRole("heading")).toBeInTheDocument();
});
