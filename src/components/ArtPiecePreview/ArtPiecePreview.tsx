import { ReactNode } from "react";
import { Link } from "react-router";

type ArtPiecePreviewProps = {
  slug: string;
  imageSource: string;
  name: string;
  artist: string;
  children: ReactNode;
};

export default function ArtPiecePreview({
  slug,
  imageSource,
  name,
  artist,
  children,
}: ArtPiecePreviewProps) {
  return (
    <div className="art-piece">
      <img src={imageSource} alt={name} />
      {children}
      <Link to={`/art-pieces/${slug}`}>
        <p>{artist}</p>
        <p>{name}</p>
      </Link>
    </div>
  );
}
