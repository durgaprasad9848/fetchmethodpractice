import "./App.css";
import React, { useState, useEffect, useCallback } from "react";
import MovieList from "./Components/MovieList";
const App = () => {
  const [movie, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(0);
  const [error, setError] = useState(false);

  const [retry, setRetry] = useState(false);
  const [cencil, setCancil] = useState(false);

  const fetchMoviesHandler = useCallback( async ()=> {
    setisLoading(1);
    setError(null);

    try {
      const response = await fetch("https://swapi.dev/api/films/");

      if (!response.ok) {
        setCancil(true);
        throw new Error("Somethng Went Wrong...Retrying");
      }

      const data = await response.json();
      setRetry(!retry);

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseData: movieData.release_date,
        };
      });

      setMovies(transformedMovies);
    } catch (err) {
      setError(err.message);
    }

    setisLoading(0);
  });


  useEffect(() => {
    let intervalId;

    if (retry) {
      intervalId = setInterval(() => {
        console.log("fetching");
        fetchMoviesHandler();
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [retry]);


  useEffect(()=>{setRetry(!retry)},[]);



 



  let content = <p>Found no movies.</p>;

  if (movie.length > 0) {
    content = <MovieList Movies={movie} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button
          onClick={() => {
            console.log("Button clicked");
            setRetry(!retry);
          }}
        >
          Fetch Movies
        </button>
      </section>
      <section>
        {content}
        <div>
          {cencil && (
            <button
              onClick={() => {
                setRetry(!retry);
                setCancil(false);
              }}
            >
              cancil
            </button>
          )}
        </div>
      </section>
    </React.Fragment>
  );
};

export default App;
