import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Spotlight from "./Spotlight";
import { MemoryRouter } from "react-router";
import { ArtPiece } from "../types";

test("renders image, artist and FavoriteButton", async () => {
  const user = userEvent.setup();
  const handleToggleFavorite = vi.fn();

  const artPieces: ArtPiece[] = [
    {
      slug: "test-art-piece",
      imageSource: "https://example.com/test-image.jpg",
      name: "Test Painting",
      artist: "Test Artist",
      year: "2000",
      genre: "Test Genre",
      colors: ["black"],
      dimensions: { height: 10, width: 10, type: "test string" },
    },
  ];

  const artPieceInfo = [
    {
      slug: "test-art-piece",
      isFavorite: false,
      comments: [{ text: "text string", date: "date string" }],
    },
  ];

  render(
    <MemoryRouter>
      <Spotlight
        artPieces={artPieces}
        artPieceInfo={artPieceInfo}
        handleToggleFavorite={handleToggleFavorite}
      ></Spotlight>
    </MemoryRouter>
  );

  const imageSource = screen.getByRole("img", { name: "Test Painting" });
  expect(imageSource).toHaveAttribute(
    "src",
    "https://example.com/test-image.jpg"
  );

  const artist = screen.getByText("Test Artist");
  expect(artist).toBeInTheDocument();

  const favoriteButton = screen.getByRole("button");
  await user.click(favoriteButton);

  expect(handleToggleFavorite).toHaveBeenCalledTimes(1);
});
