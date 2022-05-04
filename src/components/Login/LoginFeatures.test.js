import React from "react";
import { render, screen } from "@testing-library/react";
import LoginFeatures from "./LoginFeatures";

// describe("Input", () => {
//   it("should render default Input('Email Address')", () => {
//     const wrapper = render(
//       <LoginFeatures>
//         <Input placeholder={"Email Address"} size={"large"}></Input>
//       </LoginFeatures>
//     );
//     const text_bar = wrapper.getAllByPlaceholderText("Email Address");
//     const element = wrapper.container.firstElementChild;
//     expect(text_bar).toBeInTheDocument();
//     expect(text_bar.tagName).toBe("INPUT");
//   });
// });

test("should render Input placeholder; Email Address", () => {
  render(<LoginFeatures />);
  const emailAdressInput = screen.getByPlaceholderText("Email Address");
  const sizeInput = emailAdressInput.size;
  const valueInput = emailAdressInput.value;

  expect(sizeInput).toBe(20);
  expect(valueInput).toBe("");
  expect(emailAdressInput).toBeInTheDocument();
});

test("should render Input placeholder; Password", () => {
  render(<LoginFeatures />);
  const passwordInput = screen.getByPlaceholderText("Password");
  const typeInput = passwordInput.type;
  const sizeInput = passwordInput.size;
  const valueInput = passwordInput.value;

  expect(passwordInput).toBeInTheDocument();
  expect(typeInput).toBe("password");
  expect(sizeInput).toBe(20);
  expect(valueInput).toBe("");
});
