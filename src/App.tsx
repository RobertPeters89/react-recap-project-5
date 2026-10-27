import "./styles.css";
import useSWR from "swr";
import { ArtPiece } from "./types";
import { Route, Routes } from "react-router";
import ArtPieceList from "./components/ListOfArtPieces/ListOfArtPieces";
import ArtPieceDetails from "./pages/ArtPieceDetails";
import Spotlight from "./pages/Spotlight";
import Navigation from "./components/Navigation/Navigation";
import { useState } from "react";

const URL = `https://example-apis.vercel.app/api/art`;

async function fetcher(URL: string): Promise<ArtPiece[]> {
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`Error Status: ${response.status}`);
    }
    const data: ArtPiece[] = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("Unknown error");
    }
    throw error;
  }
}

export default function App() {
  const {
    data: artPieces,
    error,
    isLoading,
  } = useSWR<ArtPiece[]>(URL, fetcher);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!artPieces) return null;

  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  function handleToggleFavorite(event: any): void {
    console.log(event.target.value);
    const favorite = artPieces?.filter((piece) =>
      piece.slug === event.target.value
        ? { ...piece, isFavorite: !piece.IsFavorite }
        : piece
    );
  }

  // console.log(artPieces);

  return (
    <main>
      <h1>Art Gallery</h1>
      <Navigation />
      <Routes>
        <Route path="/" element={<Spotlight artPieces={artPieces} />} />
        <Route
          path="/art-pieces"
          element={
            <ArtPieceList
              artPieces={artPieces}
              handleToggleFavorite={handleToggleFavorite}
            />
          }
        />
        <Route
          path="/art-pieces/:slug"
          element={<ArtPieceDetails artPieces={artPieces} />}
        />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </main>
  );
}
