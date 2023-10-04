import React, { useState } from "react";

const UseReducerBefore = () => {
  const [counter, setCounter] = useState(0);
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
          setShowText(!showText);
        }}
      >
        Click Here
      </button>
      {showText && <p>This is text</p>}
    </div>
  );
};

export default  UseReducerBefore;