/**
 * @jest-environment jsdom
 */

import * as React from "react";
import { render } from "@testing-library/react";
import RecentLogin from "../RecentLogin";

describe("When you have a recent login", () => {
  it("Should render captian america Recent Login", () => {
    const { getByAltText } = render(
      <RecentLogin recentLogin={{ date: "", name: "", src: "" }} />
    );
    const captainAmerica = getByAltText("Capitan América");
    expect(captainAmerica).toHaveAttribute("src");
  });
});

describe("When you don't have a recent login", () => {
  it("It should render the button of add a new account", () => {
    const { getByRole } = render(<RecentLogin />);
    const addAccount = getByRole("button");
    expect(addAccount).toBeVisible();
  });
});
