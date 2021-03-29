import React from "react";
import "./SearchBar.scss";
import Button from "../Button/Button.jsx";

const SearchBar = () => {
  const handleSearch = () => alert('searching');
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
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
};

export default SearchBar;
