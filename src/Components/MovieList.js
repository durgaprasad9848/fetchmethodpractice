import React from "react";
import Movie from "./Movie";
import './MovieList.css';

const MovieList = (props) => {
 

  return (
    <div>
      <ul className="ullist">
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
