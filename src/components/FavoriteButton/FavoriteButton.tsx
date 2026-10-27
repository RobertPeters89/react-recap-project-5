import { ArtPieceInfo } from "../../types";
import { Heart } from "lucide-react";

export default function FavoriteButton({
  slug,
  isFavorite,
  onToogleFavorite,
}: ArtPieceInfo) {
  return (
    <button
      onClick={() => onToogleFavorite(slug)}
      className="favorite-button"
      type="button"
    >
      <Heart
        fill={isFavorite ? "red" : "none"}
        color={isFavorite ? "red" : "currentColor"}
        size={40}
        onClick={() => console.log(slug)}
      />
    </button>
  );
}
