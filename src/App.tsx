import "./styles.css";
import useSWR from "swr";
import { ArtPiece } from "./types";
import { data, Navigate, Route, Routes } from "react-router";
import ArtPieceList from "./components/ListOfArtPieces/ListOfArtPieces";

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

  return (
    <main>
      <h1>Art Gallery</h1>
      <Routes>
        <Route
          path="/art-pieces"
          element={<ArtPieceList artPieces={artPieces} />}
        />
      </Routes>
    </main>
  );
}
