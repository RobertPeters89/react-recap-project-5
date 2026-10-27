import { useState } from "react";
import { ArtPiece } from "../types";

function getRandomArtPiece(artPieces: ArtPiece[]): ArtPiece {
  const RandomNumber = Math.floor(Math.random() * artPieces.length);
  const Art = artPieces[RandomNumber];
  return Art;
}

type SpotlightProps = {
  artPieces: ArtPiece[];
};

export default function Spotlight({ artPieces }: SpotlightProps) {
  const [spotLightPeice] = useState<ArtPiece>(() =>
    getRandomArtPiece(artPieces)
  );
  return (
    <div className="spotlight">
      <img src={spotLightPeice.imageSource} alt={spotLightPeice.name} />
      <p>{spotLightPeice.artist}</p>
    </div>
  );
}
