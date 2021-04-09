import React from "react";
import { error_logo } from "../visuals/desktop";
import { useJobsContext } from "../JobsContext";

const ErrorDisplay = ({ noJobs, apiError }) => {
    const { error, location } = useJobsContext();
    const search = localStorage.getItem("search");
    const full = localStorage.getItem("full time");

    return (
        <div className="error">
            <img src={error_logo} alt="Error! Error! Bloody error!" />
            <div className={`error__message ${apiError ? "visible" : "hidden"}`}>
                <h3>{error.statusCode}</h3>
                <p>{error.statusText}</p>
            </div>
            <p className={`no__jobs ${noJobs ? "visible" : "hidden"}`}>No 
                <strong>{full === "true" ? "full time" : ""}</strong> 
                <strong>{search}</strong> jobs found {location ? "in" : ""} 
                <strong>{location}</strong>
            </p>
        </div>
    )
}

export default ErrorDisplay;