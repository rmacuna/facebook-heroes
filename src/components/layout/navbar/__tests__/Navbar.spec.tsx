/**
 * @jest-environment jsdom
 */

import * as React from "react";

import { render, screen } from "@testing-library/react";

import Navbar from "../Navbar";

it("should render correctly", () => {
  render(<Navbar />);
  const navbar = screen.getByRole("navigation");
  expect(navbar).toBeVisible();
});
