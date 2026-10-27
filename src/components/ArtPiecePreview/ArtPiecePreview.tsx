import { Link } from "react-router";

type ArtPiecePreviewProps = {
  slug: string;
  imageSource: string;
  name: string;
  artist: string;
};

export default function ArtPiecePreview({
  slug,
  imageSource,
  name,
  artist,
}: ArtPiecePreviewProps) {
  return (
    <div className="art-piece">
      <Link to={`/art-pieces/${slug}`}>
        <h3>{artist}</h3>
        <h3>{name}</h3>
        <img src={imageSource} alt={name} />
      </Link>
    </div>
  );
}
