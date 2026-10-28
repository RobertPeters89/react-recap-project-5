import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import ArtPiecePreview from "./ArtPiecePreview";

test("renders slug, image, name, artist and children", () => {
  render(
    <MemoryRouter>
      <ArtPiecePreview
        slug="Robert"
        imageSource="https://robert.com/image.jpg"
        name="Peters"
        artist="John Doe"
      >
        <button type="button">Child</button>
      </ArtPiecePreview>
    </MemoryRouter>
  );
});
