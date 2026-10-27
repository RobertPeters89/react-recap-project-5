import { Link, useParams } from "react-router";
import { ArtPiece } from "../../types";

type ArtPieceDetailsProps = {
  artPieces: ArtPiece[];
};

export default function ArtPieceDetails({ artPieces }: ArtPieceDetailsProps) {
  const { slug } = useParams<{ slug: string }>();
  const artPiece = artPieces.find((piece) => piece.slug === slug);
  if (!artPiece) {
    return (
      <>
        <p>Art piece not found</p>
        <Link to="/art-pieces">Back</Link>
      </>
    );
  }

  return (
    <div className="details">
      <img src={artPiece.imageSource} alt={artPiece.name} />
      <h3>{artPiece.name}</h3>
      <p>{artPiece.artist}</p>
      <p>{artPiece.year}</p>
      <p>{artPiece.genre}</p>
    </div>
  );
}
