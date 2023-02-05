import React from "react";
import { Card } from "react-bootstrap";
import "./Movie.css";
const Movie = (props) => {
  console.log(props.id);
  return (
    <Card>
      <li id={props.id}>
        {props.Title} -{props.Release_Date} -{props.Opening_text}{" "}
        <button
          onClick={() => {
            props.deletef(props.id);
          }}
        >
          delete
        </button>
      </li>
    </Card>
  );
};

export default Movie;
