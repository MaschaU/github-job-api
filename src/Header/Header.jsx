import React from "react";
import { useEffect } from "react";
import { useJobsContext } from "../JobsContext";
import { bgPatternHeader, iconMoon, iconSun, logo } from "../visuals/desktop";

import "./Header.scss";

const Header = () => {
  const htmlTag = document.body.parentElement;
  const { defaultTheme, setDefaultTheme } = useJobsContext();

  useEffect(() => {
    if (!localStorage.getItem("themes")) {
      setDefaultTheme(true);
      localStorage.setItem("themes", "defaultTheme");
      htmlTag.setAttribute("data-theme", "defaultTheme");
    } else {
      htmlTag.setAttribute("data-theme", localStorage.getItem("themes"));
    }
  }, [htmlTag, setDefaultTheme]);

  const switchTheme = () => {
    if (!defaultTheme) {
      localStorage.setItem("themes", "defaultTheme");
      htmlTag.setAttribute("data-theme", localStorage.getItem("themes"));
      setDefaultTheme(true);
    } else {
      localStorage.setItem("themes", "dark");
      htmlTag.setAttribute("data-theme", localStorage.getItem("themes"));
      setDefaultTheme(false);
    }
  };

  return (
    <div className="header__desktop">
      <div className="header__backgrounds">
        <img className="header__banner" src={bgPatternHeader} alt="" />
      </div>
      <div className="header__inner">
        <img className="header__logo" src={logo} alt="company logo" />
        <div className="header__toggle">
          <span>
            <img src={iconSun} alt="sun" />
          </span>
          <button
            className={`header__toggle_button ${!defaultTheme ? "active" : ""}`}
            aria-label="Toggle between themes"
            onClick={() => switchTheme()}
          >
            <span className="header__slider" />
          </button>
          <span>
            <img src={iconMoon} alt="moon" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
