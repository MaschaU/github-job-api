import React from "react";
import { useJobsContext } from "../JobsContext";
import { Link } from "react-router-dom";
import "./SearchBar.scss";
import Button from "../Button/Button.jsx";

const SearchBar = () => {
  return (
    <div className="search">
      <label for="filter-title"></label>
      <input
        type="text"
        id="filter-title"
        name="filter-title"
        placeholder="Filter by title"
      ></input>
      <input
        type="text"
        id="filter-location"
        name="filter-location"
        placeholder="Filter by location"
      ></input>
      <div className="checkbox">
        <input className="checkbox__area"
          type="checkbox"
          id="full-time"
          name="full-time"
          value="full-time"
        ></input>
        <p className="checkbox__text">Full time only</p>
      </div>
      <Button/>
    </div>
  );
};

export default SearchBar;
