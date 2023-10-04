import React, { useState } from "react";

const UseStateToKnow = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter (counter + 1);
  };

  const decrement = () => {
    setCounter (counter - 1);
  };
  return (
    <>
  <div>
    <div>Counter : {counter}</div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
};

export default UseStateToKnow;
