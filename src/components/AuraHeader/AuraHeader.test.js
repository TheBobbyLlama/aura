import React from "react";
import { render } from "@testing-library/react";
import AuraHeader from "./AuraHeader";

test("renders child element", () => {
  const { getByText } = render(
    <AuraHeader>
      <div>Header Child</div>
    </AuraHeader>
  );

  expect(getByText(/Header Child/)).toBeInTheDocument();
});
