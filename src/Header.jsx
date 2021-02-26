import React from "react";
import { useEffect, useContext } from "react";
import  { JobsContext } from "./JobsContext";

const Header = () => {

  const htmlTag = document.body.parentElement;
  const {defaultTheme, setDefaultTheme} = useContext(JobsContext);

  useEffect (() => {
    if (!localStorage.getItem("themes")) {
        setDefaultTheme(true)
        localStorage.setItem("themes", "defaultTheme")
        htmlTag.setAttribute("data-theme", "defaultTheme")
    } else {
        htmlTag.setAttribute("data-theme", localStorage.getItem("themes"))
    }
  }, [htmlTag, setDefaultTheme])
  
  const switchTheme = () => {
    if (!defaultTheme) {
        localStorage.setItem("themes", "defaultTheme")
        htmlTag.setAttribute("data-theme", localStorage.getItem("themes"))
        setDefaultTheme(true)
    } else {
        localStorage.setItem("themes", "dark")
        htmlTag.setAttribute("data-theme", localStorage.getItem("themes"))
        setDefaultTheme(false)
    }
  }

  return(
    <div className="header__desktop">
    <div className="header__backgrounds">
        <img className="header__banner" src="../visuals/desktop/bg-pattern-header.svg" alt="" />
    </div>
    <div className="header__inner">
      <img className="header__logo" src="../visuals/desktop/logo.svg" alt="company logo" />
    <div className="header__toggle">
      <span>
        <img src="../visuals/desktop/icon-sun.svg" alt="sun" />
      </span>
      <button className={`header__toggle_button ${!defaultTheme? "active": ""}`} aria-label="Toggle between themes"
      onClick={()=>switchTheme()}>
        <span className="header__slider" />
      </button>
      <span>
        <img src="../visuals/desktop/icon-moon.svg" alt="moon" />
      </span>
    </div>
  </div>
</div>
    
  )
}

export default Header ;