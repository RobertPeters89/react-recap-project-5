import { Dimensions } from "../../types";

type ArtPiecePreviewProps = {
  imageSource: string;
  name: string;
  artist: string;
};

export default function ArtPiecePreview({
  imageSource,
  name,
  artist,
}: ArtPiecePreviewProps) {
  return (
    <>
      <h3>{artist}</h3>
      <h3>{name}</h3>
      <img src={imageSource} alt={name} />
    </>
  );
}
