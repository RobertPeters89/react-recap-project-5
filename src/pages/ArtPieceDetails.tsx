import { Link, useNavigate, useParams } from "react-router";
import { ArtPiece, ArtPieceListProps } from "../types";
import FavoriteButton from "../components/FavoriteButton/FavoriteButton";
import ColorPalette from "../components/ColorPalette/ColorPalette";

export default function ArtPieceDetails({
  artPieces,
  artPieceInfo,
  handleToggleFavorite,
}: ArtPieceListProps) {
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

  const isFavorite =
    artPieceInfo.find((info) => info.slug === artPiece.slug)?.isFavorite ??
    false;

  return (
    <div className="details">
      <button type="button" onClick={() => navigate("/art-pieces")}>
        Back to Gallery
      </button>
      <div className="details-image">
        <img src={artPiece.imageSource} alt={artPiece.name} />
        <FavoriteButton
          slug={artPiece.slug}
          isFavorite={isFavorite}
          onToggleFavorite={handleToggleFavorite}
        />
      </div>
      <h3>Titel: {artPiece.name}</h3>
      <p>Artist: {artPiece.artist}</p>
      <p>Year: {artPiece.year}</p>
      <p>Genre: {artPiece.genre}</p>
      <ColorPalette colors={artPiece.colors} />
    </div>
  );
}
