import "./App.css";
import React, { useState, useEffect } from "react";
import MovieList from "./Components/MovieList";
const App = () => {
  const [movie, setMovies] = useState([]);

 async function  fetchMoviesHandler () {
   const response = await fetch("https://swapi.dev/api/films/")
   const data = await response.json();
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseData: movieData.release_date,
          };
        });
        setMovies(transformedMovies);
      }
  

  return (
    <React.Fragment>
      <section>
        <button
          onClick={() => {
            fetchMoviesHandler();
          }}
        >
          Fetch Movies
        </button>
      </section>
      <section>
        <MovieList Movies={movie} />
      </section>
    </React.Fragment>
  );
};

export default App;
