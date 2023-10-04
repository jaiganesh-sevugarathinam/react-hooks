import React, {useRef} from "react";
// to manipulate with the DOM - useRef
const UseRef = () => {

  const inputRef = useRef(null);
  const clickEvenHandler = () => {
    //console.log(inputRef.current.value); // to get the text box content
    //console.log(inputRef.current.value = ""); // to clear the text box content
    inputRef.current.focus(); // to focus the text box

  }


  return (
    <div>
      <h1>Jaiganesh</h1>
      <input type="text" placeholder="type here..." ref = {inputRef}/>
      <button onClick = {clickEvenHandler}>Change Name</button>
    </div>
  );
};

export default UseRef;
