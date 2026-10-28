export type Dimensions = {
  height: number;
  width: number;
  type: string;
};

export type ArtPiece = {
  slug: string;
  artist: string;
  name: string;
  imageSource: string;
  year: string;
  genre: string;
  colors: string[];
  dimensions: Dimensions;
};

export type ArtPieceComment = {
  text: string;
  date: string;
};

export type ArtPieceInfo = {
  slug: string;
  isFavorite: boolean;
  comments: ArtPieceComment[];
};

export type ArtPieceListProps = {
  artPieces: ArtPiece[];
  artPieceInfo: ArtPieceInfo[];
  handleToggleFavorite: (slug: string) => void;
};
