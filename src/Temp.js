





import React, { useState, useEffect } from "react";

const App = () => {
  const [state, setState] = useState(0);



  useEffect(() => {
    if (state) {
      
      console.log("if block");
      setState(!state);
    }
    else{
      console.log("else block")
      setState(!state);
    }
  });



  return (
    <div>
      hi
      <button
        onClick={() => {
        console.log("BUTTON");
        setState(!state);
        }}
      >
        click me
      </button>
      <button
        onClick={() => {
          setState(0);
        }}
      >
        stop me
      </button>
    </div>
  );
};
export default App;
