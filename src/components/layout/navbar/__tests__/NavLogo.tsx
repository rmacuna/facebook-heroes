/**
 * @jest-environment jsdom
 */
import * as React from "react";
import { render } from "@testing-library/react";
import NavLogo from "../NavLogo";

it("Should render the facebook logo", () => {
  const { getByAltText } = render(<NavLogo />);
  const captainAmerica = getByAltText("Facebook logo");
  expect(captainAmerica).toHaveAttribute("src");
});
