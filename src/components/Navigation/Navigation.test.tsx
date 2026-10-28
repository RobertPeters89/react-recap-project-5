import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Navigation from "./Navigation";

test("renders all three navigation link", () => {
  render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  );

  expect(screen.getAllByRole("link")).toHaveLength(3);
  expect(screen.getByRole("link", { name: "Spotlight" })).toHaveAttribute(
    "href",
    "/"
  );
  expect(screen.getByRole("link", { name: "Art Pieces" })).toHaveAttribute(
    "href",
    "/art-pieces"
  );
  expect(screen.getByRole("link", { name: "Favorites" })).toHaveAttribute(
    "href",
    "/favorites"
  );
});

test("the navigation is marked", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Navigation />
    </MemoryRouter>
  );

  expect(screen.getByRole("link", { name: "Spotlight" })).toHaveClass("active");
  expect(screen.getByRole("link", { name: "Art Pieces" })).not.toHaveClass(
    "active"
  );
  expect(screen.getByRole("link", { name: "Favorites" })).not.toHaveClass(
    "active"
  );
});
