import React from "react";
import { useContext } from "react";
import { error_logo } from "../visuals/desktop";
import { JobsContext } from "../JobsContext";

const Error = ({ noJobs, apiError }) => {
    const { error } = useContext(JobsContext)
    const search = localStorage.getItem("search");
    const location = localStorage.getItem("location");
    const full = localStorage.getItem("full time");

    return (
        <div className="error">
            <img src={error_logo} alt="Error! Error!" />
            <div className={`error__message ${apiError ? "visible" : "hidden"}`}>
                <h3>{error.statusCode}</h3>
                <p>{error.statusText}</p>
            </div>
            <p className={`no__jobs ${noJobs ? "visible" : "hidden"}`}>
                No <strong>{full === "true" ? "full time" : ""}</strong> <strong>{search}</strong> jobs found {location ? 'in' : ''} <strong>{location}</strong>
            </p>
        </div>
    )
}

export default Error;