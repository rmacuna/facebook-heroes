/**
 * @jest-environment jsdom
 */
import * as React from "react";
import { screen, render } from "@testing-library/react";
import NavigationItem from "../NavigationItem";

it("Should render the navigation item with value Facebook Lite", () => {
  render(<NavigationItem value="Facebook Lite" />);
  const element = screen.getByRole("listitem");
  expect(element.textContent).toBe("Facebook Lite");
});
