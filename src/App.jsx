import Header from "./Header";
import React, { useState, useEffect, createContext } from "react";
import { JobsContext } from "./JobsContext";

function App() {
  const [defaultTheme, setDefaultTheme] = useState(localStorage.getItem("themes") === "default" ? true : false);
  return (
    <div className="App">
      <JobsContext.Provider value={{defaultTheme, setDefaultTheme}}>
        <Header/>
      </JobsContext.Provider>
    </div>

  );
}

export default App;
