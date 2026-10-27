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

export type ArtPieceInfo = {
  slug: string;
  isFavorite: boolean;
  onToogleFavorite: (slug: string) => void;
};
