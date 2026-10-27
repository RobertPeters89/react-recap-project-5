import { ArtPiece } from "../../types";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

type ArtPieceListProps = {
  artPieces: ArtPiece[];
  handleToggleFavorite: (slug: string) => void;
};

export default function ArtPieceList({
  artPieces,
  handleToggleFavorite,
}: ArtPieceListProps) {
  return (
    <ul className="art-list">
      {artPieces.map((artPiece) => (
        <li className="art-piece" key={artPiece.slug}>
          <ArtPiecePreview
            slug={artPiece.slug}
            imageSource={artPiece.imageSource}
            name={artPiece.name}
            artist={artPiece.artist}
          />
          <FavoriteButton
            slug={artPiece.slug}
            // isFavorite={piece.isFavorite}
            onToggleFavorite={handleToggleFavorite}
          />
        </li>
      ))}
    </ul>
  );
}
