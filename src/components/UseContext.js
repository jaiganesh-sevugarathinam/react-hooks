import React, { useState, createContext } from "react";
import UserContext from "./UserContext";
import LoginContext from "./LoginContext";

export const AppContext = createContext(null);

const UseContext = () => {
  const [userName, setUserName] = useState("");

  return (
    <div>
      <AppContext.Provider value={{ userName, setUserName }}>
        <LoginContext /> <UserContext />
      </AppContext.Provider>
    </div>
  );
};

export default UseContext;
