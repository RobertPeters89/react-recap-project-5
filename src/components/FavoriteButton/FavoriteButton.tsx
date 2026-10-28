import { Heart } from "lucide-react";

type FavoriteButtonProps = {
  slug: string;
  isFavorite: boolean;
  onToggleFavorite: (slug: string) => void;
};

export default function FavoriteButton({
  slug,
  isFavorite,
  onToggleFavorite,
}: FavoriteButtonProps) {
  return (
    <button
      onClick={() => onToggleFavorite(slug)}
      className="favorite-button"
      type="button"
      aria-pressed={isFavorite}
      aria-label="Favorit"
    >
      <Heart
        fill={isFavorite ? "currentColor" : "currentFill"}
        color="currentColor"
        size={35}
      />
    </button>
  );
}
