import { ArtPieceListProps } from "../types";
import ArtPieceList from "../components/ListOfArtPieces/ListOfArtPieces";

export default function Favorite({
  artPieces,
  artPieceInfo,
  handleToggleFavorite,
}: ArtPieceListProps) {
  if (artPieces.length <= 0) return <h2>Nothing...</h2>;
  return (
    <div>
      <ArtPieceList
        artPieces={artPieces}
        artPieceInfo={artPieceInfo}
        handleToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
}
