/**
 * @jest-environment jsdom
 */

import React from "react";

import { render } from "@testing-library/react";

import WelcomeSection from "../WelcomeSection";

it("Should render the component and display the correct value", () => {
  const { getByRole } = render(<WelcomeSection />);
  const header = getByRole("heading");
  expect(header).toBeVisible();
  expect(header).toHaveTextContent(
    "Facebook helps you connect and share with the people who are part of your life."
  );
});
