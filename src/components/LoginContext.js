import React, { useContext } from "react";
import { AppContext } from "./UseContext";

function LoginContext() {
  const { setUserName } = useContext(AppContext);

  return (
    <div>
      <input
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
    </div>
  );
}

export default LoginContext;