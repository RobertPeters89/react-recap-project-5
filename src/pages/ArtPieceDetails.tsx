import { Link, useNavigate, useParams } from "react-router";
import { ArtPiece, ArtPieceInfo } from "../types";
import CommentForm from "../components/CommentForm/CommentForm";
import Comments from "../components/Comments/Comments";

type ArtPieceDetailsProps = {
  artPieces: ArtPiece[];
  artPieceInfo: ArtPieceInfo[];
  onAddComment: (slug: string, text: string) => void;
};

export default function ArtPieceDetails({
  artPieces,
  artPieceInfo,
  onAddComment,
}: ArtPieceDetailsProps) {
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

  const comments =
    artPieceInfo.find((info) => info.slug === artPiece.slug)?.comments ?? [];

  return (
    <div className="details">
      <img src={artPiece.imageSource} alt={artPiece.name} />
      <h3>Titel: {artPiece.name}</h3>
      <p>Artist: {artPiece.artist}</p>
      <p>Year: {artPiece.year}</p>
      <p>Genre: {artPiece.genre}</p>
      <Comments comments={comments} />
      <CommentForm onAddComment={(text) => onAddComment(artPiece.slug, text)} />
      <button type="button" onClick={() => navigate("/art-pieces")}>
        Back to Gallery
      </button>
    </div>
  );
}
