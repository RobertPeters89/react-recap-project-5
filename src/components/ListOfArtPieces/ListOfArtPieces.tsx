import { ArtPieceListProps } from "../../types";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPieceList({
  artPieces,
  artPieceInfo,
  handleToggleFavorite,
}: ArtPieceListProps) {
  return (
    <ul className="art-list">
      {artPieces.map((artPiece) => {
        const isFavorite =
          artPieceInfo.find((info) => info.slug === artPiece.slug)
            ?.isFavorite ?? false;

        return (
          <li className="art-piece" key={artPiece.slug}>
            <ArtPiecePreview
              slug={artPiece.slug}
              imageSource={artPiece.imageSource}
              name={artPiece.name}
              artist={artPiece.artist}
            />
            <FavoriteButton
              slug={artPiece.slug}
              isFavorite={isFavorite}
              onToggleFavorite={handleToggleFavorite}
            />
          </li>
        );
      })}
    </ul>
  );
}
