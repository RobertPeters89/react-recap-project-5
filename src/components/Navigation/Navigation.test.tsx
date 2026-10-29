import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Navigation from "./Navigation";

test("renders all three navigation link", () => {
  render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  );

  const spotlightLink = screen.getByRole("link", { name: "Spotlight" });
  expect(spotlightLink).toHaveAttribute("href", "/");

  const artPiecesLink = screen.getByRole("link", { name: "Art Pieces" });
  expect(artPiecesLink).toHaveAttribute("href", "/art-pieces");

  const favorites = screen.getByRole("link", { name: "Favorites" });
  expect(favorites).toHaveAttribute("href", "/favorites");

  expect(screen.getAllByRole("link")).toHaveLength(3);
});

test("the navigation is marked", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Navigation />
    </MemoryRouter>
  );

  const artPiecesLink = screen.getByRole("link", { name: "Art Pieces" });
  expect(artPiecesLink).not.toHaveClass("active");

  const favorites = screen.getByRole("link", { name: "Favorites" });
  expect(favorites).not.toHaveClass("active");
});
