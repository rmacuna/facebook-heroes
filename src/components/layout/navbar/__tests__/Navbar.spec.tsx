/**
 * @jest-environment jsdom
 */

import * as React from "react";
import Navbar from "../Navbar";
import { render, screen } from "@testing-library/react";

it("should render correctly", () => {
  render(<Navbar />);
  const navbar = screen.getByRole("navigation");
  expect(navbar).toBeVisible();
});
