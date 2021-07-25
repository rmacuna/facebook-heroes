import React, { memo } from "react";
import QUOTES from "../../../constants/quotes";
/**
 *
 * Create the Daily Quote component
 * This component takes a random quote from the quote list
 * and renders it to the screen
 */

export default memo(function DailyQuote() {
  // Take a random quote from the quote array
  const quote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  return (
    <h1 role="heading" className="text-xl font-semibold pb-6">
      {quote}
    </h1>
  );
});
