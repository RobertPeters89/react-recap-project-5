import { Link, useNavigate, useParams } from "react-router";
import { ArtPieceDetailsProps } from "../types";
import FavoriteButton from "../components/FavoriteButton/FavoriteButton";
import ColorPalette from "../components/ColorPalette/ColorPalette";
import CommentForm from "../components/CommentForm/CommentForm";
import Comments from "../components/Comments/Comments";

export default function ArtPieceDetails({
  artPieces,
  artPieceInfo,
  handleToggleFavorite,
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
  const isFavorite =
    artPieceInfo.find((info) => info.slug === artPiece.slug)?.isFavorite ??
    false;

  return (
    <>
      <button
        className="navBack"
        type="button"
        onClick={() => navigate("/art-pieces")}
      >
        Back to Gallery →
      </button>
      <div className="details">
        <h2>{artPiece.name}</h2>
        <div className="details-image">
          <img src={artPiece.imageSource} alt={artPiece.name} />
          <FavoriteButton
            slug={artPiece.slug}
            isFavorite={isFavorite}
            onToggleFavorite={handleToggleFavorite}
          />
        </div>

        <p>Artist: {artPiece.artist}</p>
        <p>Year: {artPiece.year}</p>
        <p>Genre: {artPiece.genre}</p>
        <ColorPalette colors={artPiece.colors} />
        <Comments comments={comments} />
        <CommentForm
          onAddComment={(text) => onAddComment(artPiece.slug, text)}
        />
      </div>
    </>
  );
}
