import React from "react";
import "./SearchBar.scss";
import { useJobsContext } from "../JobsContext";
import Button from "../Button/Button.jsx";

const SearchBar = () => {
  const { BASE_URL, githubApi, searchInput, setSearchInput, locationInput, setLocationInput, fullTime, setFullTime, setSearchURL } = useJobsContext();

  const handleSearch = (e) => {
    e.preventDefault();

    let search = searchInput.trim() !== ""
            ?   `description=${searchInput}`.replace(/ /g, "+")
            :   "";

        let location = locationInput.trim() !== ""
            ?  `location=${locationInput}`.replace(/ /g, "+")
            :   "";


    let full = fullTime ? `full_time=on` : ""

    let searchEndpoint = `${BASE_URL}?${[search, location, full].filter(Boolean).join("&")}`

    if (search || location || full) {
        setSearchURL(searchEndpoint)
        githubApi(searchEndpoint)
        setSearchInput("search", searchInput.trim())
        setLocationInput(locationInput.trim());
        setFullTime("full time", fullTime)
        sessionStorage.setItem("search URL", searchEndpoint)
    } else {
        githubApi(`${BASE_URL}`)
        setSearchURL("")
        sessionStorage.setItem("search URL", "")
    }      
}

  
  return (
    <div className="search">
      <label htmlFor="filter-title"></label>
      <input
        type="text"
        id="filter-title"
        name="filter-title"
        placeholder="Filter by title"
        className="filter-title"
      ></input>
      <input
        type="text"
        id="filter-location"
        name="filter-location"
        placeholder="Filter by location"
        onChange={e => setLocationInput(e.target.value)}
        value={locationInput}
      ></input>
      <div className="checkbox">
        <input className="checkbox__area"
          type="checkbox"
          id="full-time"
          name="full-time"
          value={fullTime}
          onClick={() => setFullTime(!fullTime)}
        ></input>
        <p className="checkbox__text">Full time only</p>
      </div>
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
};

export default SearchBar;
