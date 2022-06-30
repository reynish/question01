import React from "react";
import { createRoot } from "react-dom/client";
import App from "../App";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test("App", () => {
  it("toBeDefined", () => expect(App).toBeDefined());
  it("renders without crashing", () => {
    createRoot(container).render(<App />);
  });
});
