import React, { useState } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState(null);

  const handleFetchMovies = () => {
    fetch("https://swapi.dev/api/films/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const adaptMovies = data?.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            releaseDate: movieData.release_date,
            description: movieData.opening_crawl,
          };
        });
        setMovies(adaptMovies);
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  return (
    <>
      <section>
        <button onClick={handleFetchMovies}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </>
  );
}

export default App;
