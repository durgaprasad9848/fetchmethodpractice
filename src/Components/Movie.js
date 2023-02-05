import React from "react";
import{Card} from 'react-bootstrap';
import "./Movie.css";
const Movie = (props) => {
     return(<Card>
        <li>{props.title} -  
         {props.releaseDate} - 
         {props.openingText}</li>
        </Card>)
}

export default Movie;