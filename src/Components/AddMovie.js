import React, { useRef } from "react";
import { Card } from "react-bootstrap";
import "./AddMovie.css";

const AddMovie = () => {
  const titletext = useRef(null);
  const opentext = useRef(null);
  const releasedate = useRef(null);

  const submithandler = (e) => {
    e.preventDefault();
    const result = {
      Title: titletext.current.value,
      Opening_text: opentext.current.value,
      Release_Date: releasedate.current.value,
    };
    console.log(result);
  };

  return (
    <Card className="Cardcomp">
      <form>
        <h5>Title</h5>
        <input type="text" ref = {titletext} />
        <h5>Opening Text</h5>
        <input type="text" ref = {opentext} />
        <h5>Release Date</h5>
        <input type="text" ref ={releasedate} />
        <br />
        <button onClick={submithandler}> Add Movie </button>
      </form>
    </Card>
  );
};

export default AddMovie;
