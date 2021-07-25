/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import DailyQuote from "../DailyQuote";
import QUOTES from "../../../../constants/quotes";

test("It should render a DailyQuote", () => {
  render(<DailyQuote />);
  const headerQuote = screen.getByRole(`heading`).textContent;
  expect(QUOTES).toContain(headerQuote);
});
