import React from "react";
import { useJobsContext } from "../JobsContext";
import { bgPatternHeader, logo } from "../visuals/desktop";
import Toggle from "../Toggle/Toggle";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header__desktop">
      <div className="header__backgrounds">
        <img className="header__banner" src={bgPatternHeader} alt="" />
      </div>
      <div className="header__inner">
        <img className="header__logo" src={logo} alt="company logo" />
        <div className="header__toggle">
          <Toggle/>
        </div>
      </div>
    </div>
  );
};

export default Header;
