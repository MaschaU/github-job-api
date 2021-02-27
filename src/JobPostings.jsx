import React, { useContext } from "react";
import { JobsContext } from "./JobsContext";
import { Link } from 'react-router-dom'

const JobPostings = ({match}) => {
    const { data: {jobs} } = useContext(JobsContext);

    return(
        jobs.map((job) => (
            <div key={job.id}>
                <Link to={`/job/${job.id}`}>{job.title}</Link>
                <pre>
                    {JSON.stringify(job, null, 2)}            
                </pre>
            </div> 
        ))
    )
}

export default JobPostings;