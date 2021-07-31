/**
 * @jest-environment jsdom
 */
import * as React from "react";
import { screen, render, within } from "@testing-library/react";
import NavigationList from "../NavigationList";

const navigationLinks = [
  {
    id: "nav_messenger",
    title: "Messenger",
  },
  {
    id: "nav_fb_lite",
    title: "Facebook Lite",
  },
  {
    id: "nav_whatsapp",
    title: "WhatsApp",
  },
  {
    id: "nav_instagram",
    title: "Instagram",
  },
  {
    id: "nav_careers",
    title: "Careers",
  },
  {
    id: "nav_more",
    title: "More",
  },
];

it("Should render the navigation list with 6 elements", () => {
  render(<NavigationList navigationLinks={navigationLinks} />);
  const navigationList = screen.getByRole("list");
  const { getAllByRole } = within(navigationList);
  const items = getAllByRole("listitem");
  expect(items.length).toBe(6);
});
