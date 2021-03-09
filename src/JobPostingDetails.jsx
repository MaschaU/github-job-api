import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { JobsContext } from "./JobsContext";


const JobPostingDetails = ({ match }) => {
  const { data: {jobs}, githubApi, BASE_URL, loading } = useContext(JobsContext);

  useEffect(()=> {
    if (!jobs) {
      githubApi(BASE_URL)
    }
  }, [BASE_URL, githubApi, jobs]);
    
  if (loading) {
      return (
          <div>loading</div>
      )
  }

  const job = jobs.find((posting) => posting.id === match.params.jobID);

  if (!job) {
      return (
          <div>Job not found</div>
      )
  }

  return (
      <div>
          <Link to="/jobs">Listing</Link>
          {job.title}
      </div>
  )
}
export default JobPostingDetails;