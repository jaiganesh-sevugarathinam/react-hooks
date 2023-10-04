import React, { useState } from "react";

const UseStateEvent = () => {
  const [inputValue, setInputValue] = useState("initial");

  let changeHandler = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
  
    <div>
      <input placeholder="Enter Something..." onChange={changeHandler}/>
        {inputValue}
     </div>
  
  );
};

export default UseStateEvent;
