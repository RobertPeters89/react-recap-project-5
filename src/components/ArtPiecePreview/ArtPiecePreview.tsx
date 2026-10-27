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
      <img src={imageSource} alt={name} />
      <h3>{artist}</h3>
    </>
  );
}
