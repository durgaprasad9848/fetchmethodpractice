import React from "react";
import Movie from "./Movie";
const MovieList = (props) => {
 

  return (
    <div>
      <ul>
        {props.Movies.map((movie) => (
           <Movie 
                title ={movie.title}
                releaseDate={movie.releaseDate}
                openingText={movie.openingText}
           />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
