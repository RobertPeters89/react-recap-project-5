import { ArtPiece } from "../../types";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

type ArtPieceListProps = {
  artPieces: ArtPiece[];
};

export default function ArtPieceList({ artPieces }: ArtPieceListProps) {
  return (
    <ul className="art-list">
      {artPieces.map((artPiece) => (
        <li className="art-piece" key={artPiece.slug}>
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
