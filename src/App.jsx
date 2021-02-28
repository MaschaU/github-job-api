import Header from "./Header";
import React, { useState, useEffect, createContext } from "react";



function App() {
  const [defaultTheme, setDefaultTheme] = useState(localStorage.getItem("themes") === "default" ? true : false);
  return (
    
       

    
    <div className="App">
      <JobsContext.Provider value={{defaultTheme, setDefaultTheme}}></JobsContext.Provider>
      <Header/>
    </div>

  );
}

export default App;
