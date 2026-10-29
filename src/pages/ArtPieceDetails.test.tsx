import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { userEvent } from "@testing-library/user-event";
import ArtPieceDetails from "./ArtPieceDetails";
import { ArtPiece, ArtPieceInfo } from "../types";
import { Route, Routes } from "react-router";

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

test("renders details of the art piece and handleToggleFavorite", async () => {
  const user = userEvent.setup();
  const handleToggleFavorite = vi.fn();
  const onAddComment = vi.fn();

  render(
    <MemoryRouter initialEntries={["/art-pieces/test-art-piece"]}>
      <Routes>
        <Route
          path="/art-pieces/:slug"
          element={
            <ArtPieceDetails
              artPieces={artPieces}
              artPieceInfo={artPieceInfo}
              handleToggleFavorite={handleToggleFavorite}
              onAddComment={onAddComment}
            />
          }
        />
      </Routes>
    </MemoryRouter>
  );

  const imageSource = screen.getByRole("img", { name: "Test Painting" });
  expect(imageSource).toHaveAttribute(
    "src",
    "https://example.com/test-image.jpg"
  );

  const name = screen.getByText("Titel: Test Painting");
  expect(name).toBeInTheDocument();

  const artist = screen.getByText("Artist: Test Artist");
  expect(artist).toBeInTheDocument();

  const year = screen.getByText("Year: 2000");
  expect(year).toBeInTheDocument();

  const genre = screen.getByText("Genre: Test Genre");
  expect(genre).toBeInTheDocument();

  const favoriteButton = screen.getByRole("button", { name: "Favorit" });
  await user.click(favoriteButton);

  expect(handleToggleFavorite).toHaveBeenCalledTimes(1);
});

test("back to gallery button", async () => {
  const user = userEvent.setup();
  const handleToggleFavorite = vi.fn();
  const onAddComment = vi.fn();

  render(
    <MemoryRouter initialEntries={["/art-pieces/test-art-piece"]}>
      <Routes>
        <Route path="/art-pieces" element={<p>Art Pieces</p>} />
        <Route
          path="/art-pieces/:slug"
          element={
            <ArtPieceDetails
              artPieces={artPieces}
              artPieceInfo={artPieceInfo}
              handleToggleFavorite={handleToggleFavorite}
              onAddComment={onAddComment}
            />
          }
        />
      </Routes>
    </MemoryRouter>
  );
});
