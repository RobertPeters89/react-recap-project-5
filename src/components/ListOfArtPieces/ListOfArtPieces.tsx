import { ArtPiece } from "../../types";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

type ArtPieceListProps = {
  artPieces: ArtPiece[];
};

export default function ArtPieceList({ artPieces }: ArtPieceListProps) {
  return (
    <ul>
      {artPieces.map((artPiece) => (
        <li key={artPiece.slug}>
          <ArtPiecePreview
            imageSource={artPiece.imageSource}
            name={artPiece.name}
            artist={artPiece.artist}
          />
        </li>
      ))}
    </ul>
  );
}
