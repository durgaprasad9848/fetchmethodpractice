import "./App.css";
import React, { useState, useEffect } from "react";
import MovieList from "./Components/MovieList";
const App = () => {
  const [movie, setMovies] = useState([]);
  const[isLoading,setisLoading]= useState(0);

 async function  fetchMoviesHandler () {
  setisLoading(1);
   const response = await fetch("https://swapi.dev/api/films/");
   
   const data = await response.json();
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseData: movieData.release_date,
          };
        });
        setisLoading(0);
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
        {!isLoading && movie.length >0 && <MovieList Movies={movie} />}
        {!isLoading && movie.length === 0 && <p> Found no movies.</p>}
        {isLoading && <p>Loading...</p> }
      </section>
    </React.Fragment>
  );
};

export default App;
