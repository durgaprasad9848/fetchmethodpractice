import "./App.css";
import React, { useState, useEffect, useCallback } from "react";
import MovieList from "./Components/MovieList";
import {Card,Button} from 'react-bootstrap';

import AddMovie from "./Components/AddMovie";
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
      const response = await fetch("https://test-api-c7d27-default-rtdb.firebaseio.com/movies.json");

      if (!response.ok) {
        setCancil(true);
        throw new Error("Somethng Went Wrong...Retrying");
      }

      const data = await response.json();
      setRetry(!retry);

      const loadedMovies = [];

       for(const key in data){
        loadedMovies.push({
          id : key,
          Title : data[key].Title,
          Opening_text : data[key].Opening_text,
          Release_Date : data[key].Release_Date,
        });
        
       }

      setMovies(loadedMovies);
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





  const deletefunction = async(deleteid) =>{
    console.log("Deleted");
    console.log(deleteid);

    const url = `https://test-api-c7d27-default-rtdb.firebaseio.com/movies/${deleteid}.json`;
    console.log(url);
     const response = await fetch( url,{
        method: "DELETE",
       
      });
      const  data = await response.json();
      console.log(data);
      setRetry(!retry);
    }


  let content = <p>Found no movies.</p>;

  if (movie.length > 0) {
    content = <MovieList Movies={movie} deletefun = {deletefunction} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <Card className="Maincomp"> 
      <section>
        <AddMovie retry ={retry} setRetry ={setRetry}/>
        <div className="buttondiv"> 
        <button
          onClick={() => {
            console.log("Button clicked");
            setRetry(!retry);
          }}
        >
          Fetch Movies
        </button>
        </div>
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
      </Card>
    </React.Fragment>
  );
};

export default App;
