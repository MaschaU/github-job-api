import React from "react";
import { useJobsContext } from "../JobsContext";
import { Link } from "react-router-dom";
import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <div>
      <label for="filter-title"></label>
      <textarea
        id="filter-title"
        name="filter-title"
        placeholder="Filter by title"
      ></textarea>
      <textarea
        id="filter-location"
        name="filter-location"
        placeholder="Filter by location"
      ></textarea>
    </div>
  );
};

export default SearchBar;