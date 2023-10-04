import React, { useEffect, useLayoutEffect, useRef } from "react";

const UseLayoutEffect = () => {

  const inputRef = useRef(null);
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  },[]);

  useEffect(() => {
    inputRef.current.value = "Hello..."
  },[]);
  return (
<div className="App">

  <input ref={inputRef} value = "Jai" style= {{width: 400, height: 60}} />
</div>

  );
};


export default UseLayoutEffect;
