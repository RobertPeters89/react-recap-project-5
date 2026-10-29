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
    <Link to={`/art-pieces/${slug}`}>
      <img src={imageSource} alt={name} />
      <div className="previewInfo">
        <h3>{name}</h3>
        <p>{artist}</p>
      </div>
    </Link>
  );
}
