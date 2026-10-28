import { useState } from "react";
import { ArtPiece, ArtPieceListProps } from "../types";
import FavoriteButton from "../components/FavoriteButton/FavoriteButton";

function getRandomArtPiece(artPieces: ArtPiece[]): ArtPiece {
  const RandomNumber = Math.floor(Math.random() * artPieces.length);
  const Art = artPieces[RandomNumber];
  return Art;
}

export default function Spotlight({
  artPieces,
  artPieceInfo,
  handleToggleFavorite,
}: ArtPieceListProps) {
  const [spotLightPeice] = useState<ArtPiece>(() =>
    getRandomArtPiece(artPieces)
  );

  const isFavorite =
    artPieceInfo.find((info) => info.slug === spotLightPeice.slug)
      ?.isFavorite ?? false;

  return (
    <>
      <div className="spotlightContainer">
        <div className="spotlight">
          <img src={spotLightPeice.imageSource} alt={spotLightPeice.name} />
          <FavoriteButton
            slug={spotLightPeice.slug}
            isFavorite={isFavorite}
            onToggleFavorite={handleToggleFavorite}
          />
        </div>
        <div>
          <h3>{spotLightPeice.name}</h3>
          <p>{spotLightPeice.artist}</p>
        </div>
      </div>
    </>
  );
}
