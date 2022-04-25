import React from "react";
import { render } from "@testing-library/react";
import AuraHeader from "./AuraHeader";

test("renders learn react link", () => {
  const { getByText } = render(
    <AuraHeader>
      <div>Header Child</div>
    </AuraHeader>
  );

  expect(getByText(/Header Child/)).toBeInTheDocument();
});
