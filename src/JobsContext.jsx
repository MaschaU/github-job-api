import {createContext, useContext} from "react";

export const JobsContext = createContext({});

export const useJobsContext = () => useContext(JobsContext);
