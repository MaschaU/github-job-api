import Header from "./Header/Header";
import React, { useState, useEffect } from "react";
import { JobsContext } from "./JobsContext";
import JobPostings from "./JobPostings/JobPostings";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import JobPostingDetails from "./JobPostingDetails/JobPostingDetails";

import mockPositions from './mock-data/positions.json';

function fakeFetch() {
  return new Promise((resolve) => setTimeout(() => resolve({
    json: async () => mockPositions,
    ok: true
  }), 2000));
}

function App() {
  const [defaultTheme, setDefaultTheme] = useState(
    localStorage.getItem("themes") === "default" ? true : false
  );
  const BASE_URL =
    "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";
  const [data, setData] = useState({ jobs: [] });
  const [loading, setLoading] = useState();
  const [error, setError] = useState({ error: false });
  const [resultLength, setResultLength] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [fullTime, setFullTime] = useState(false);
  const [searchURL, setSearchURL] = useState("");
  

  const githubApi = async (url) => {
    console.info("fetching jobs");
    setLoading(true);
    let returnedResults = await fakeFetch(); //fetch(url);

    let loadMoreData = url.search("page");

    if (returnedResults.ok) {
      let result = await returnedResults.json();

      setData((prev) => ({
        ...prev,
        jobs: loadMoreData !== -1 ? [...prev.jobs, ...result] : [...result],
      }));
      setResultLength(result.length);
    } else {
      setError({
        error: true,
        statusCode: returnedResults.status,
        statusText: returnedResults.statusText,
      });
    }
    setLoading(false);
  };
  useEffect(() => {
    githubApi(BASE_URL);
  }, []);

  return (
    <JobsContext.Provider
      value={{
        defaultTheme,
        setDefaultTheme,
        BASE_URL,
        githubApi,
        error,
        setError,
        data,
        loading,
        resultLength,
        setResultLength,
        searchInput, 
        setSearchInput,
        locationInput, 
        setLocationInput,
        fullTime, 
        setFullTime,
        searchURL,
        setSearchURL
      }}
    >
      <Header />
      

      <BrowserRouter>
        <Switch>
          <Route path="/job/:jobID" component={JobPostingDetails} />
          <Route path="/" component={JobPostings} />
        </Switch>
      </BrowserRouter>
    </JobsContext.Provider>
  );
}

export default App;
