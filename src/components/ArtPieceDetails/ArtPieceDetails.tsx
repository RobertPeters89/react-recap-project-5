import { Link, useNavigate, useParams } from "react-router";
import { ArtPiece } from "../../types";

type ArtPieceDetailsProps = {
  artPieces: ArtPiece[];
};

export default function ArtPieceDetails({ artPieces }: ArtPieceDetailsProps) {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
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
      <h3>Titel: {artPiece.name}</h3>
      <p>Artist: {artPiece.artist}</p>
      <p>Year: {artPiece.year}</p>
      <p>Genre: {artPiece.genre}</p>
      <button type="button" onClick={() => navigate("/art-pieces")}>
        Back to Art-Pieces
      </button>
    </div>
  );
}
