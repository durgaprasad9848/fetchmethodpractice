import React from "react";
import Movie from "./Movie";
import "./MovieList.css";

const MovieList = (props) => {
  const { deletefun, Movies } = props;

  return (
    <div>
      <ul className="ullist">
        {Movies.map((movie) => (
          <Movie
            id={movie.id}
            Title={movie.Title}
            Release_Date={movie.Release_Date}
            Opening_text={movie.Opening_text}
            deletef={deletefun}
          />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
