import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import ArtPiecePreview from "./ArtPiecePreview";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

test("renders slug, image, name, artist and children", async () => {
  const onToggleFavorite = vi.fn();
  let isFavorite = false;

  render(
    <MemoryRouter>
      <ArtPiecePreview
        slug="Robert"
        imageSource="https://robert.com/image.jpg"
        name="Peters"
        artist="John Doe"
      >
        <FavoriteButton
          slug="abc"
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
      </ArtPiecePreview>
    </MemoryRouter>
  );
});
