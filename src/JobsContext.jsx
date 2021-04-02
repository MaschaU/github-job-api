import { createContext, useContext } from "react";

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json';
export const defaultContext = {
  defaultTheme: true,
  setDefaultTheme: () => { },
  BASE_URL,
  githubApi: async () => { },
  error: null,
  setError: () => { },
  data: { jobs: [] },
  loading: false,
  resultLength: 0,
  setResultLength: () => { },
  setFullTime: () => { },
  setLocationInput: () => { },
  setSearchURL: () => { }
};

export const JobsContext = createContext(defaultContext);

export const useJobsContext = () => useContext(JobsContext);
