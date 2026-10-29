import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import ArtPiecePreview from "./ArtPiecePreview";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { userEvent } from "@testing-library/user-event";

test("renders slug, image, name, artist and children, children is FavoriteButton", () => {
  render(
    <MemoryRouter>
      <ArtPiecePreview
        slug="test-art-piece"
        imageSource="https://example.com/test-image.jpg"
        name="Test Painting"
        artist="Test Artist"
      />
    </MemoryRouter>
  );

  const slug = screen.getByRole("link");
  expect(slug).toHaveAttribute("href", "/art-pieces/test-art-piece");

  const imageSource = screen.getByRole("img", { name: "Test Painting" });
  expect(imageSource).toHaveAttribute(
    "src",
    "https://example.com/test-image.jpg"
  );

  const name = screen.getByText("Test Painting");
  expect(name).toBeInTheDocument();

  const artist = screen.getByText("Test Artist");
  expect(artist).toBeInTheDocument();
});
