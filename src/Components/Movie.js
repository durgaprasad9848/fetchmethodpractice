import React from "react";

const Movie = (props) => {
     return(<div>
        <li>{props.title} -  
         {props.releaseDate} - 
         {props.openingText}</li>
        </div>)
}

export default Movie;