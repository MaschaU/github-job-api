import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { JobsContext } from "../JobsContext";
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";
import * as moment from "moment";


const colors = [
  "#df6dae",
  "#3db3d1",
  "#3D3B94",
  "#F0B62A",
  "#E66D39",
  "#222121",
  "#5964E0",
  "#FB7E66",
  "#007CFF",
  "#492A29",
  "#60DCAD",
  "#FF585F",
];

const color = colors[Math.floor(Math.random() * colors.length)];


const JobPostingDetails = ({ match }) => {
  const { data: { jobs }, githubApi, BASE_URL, loading, error } = useContext(JobsContext);

  // useEffect(() => {
  //   if (!jobs) {
  //     githubApi(BASE_URL)
  //   }
  // }, [BASE_URL, githubApi, jobs]);

  // if (loading) {
  //   return (
  //     <Spinner />
  //   )
  // }
  const [posting, setPosting] = useState();

  useEffect(() => {
    jobs && setPosting(jobs.find((posting) => posting.id === match.params.jobID));
  }, [jobs, match.params.jobID]);

  const job = jobs.find((posting) => posting.id === match.params.jobID);

  if (!job) {
    return (
      <div>Job not found</div>
    )
  }

  const shortenedUrl = (url) => {
    if (!url || url === "http:" || url === "https:") {
      return "";
    }
    const { hostname } = new URL(url);
    if (hostname.startsWith("www.")) {
      return hostname.substring(4);
    }
    return hostname;
  }

  const probablyFunctionalSite = (url) => {
    if (!url) return false;
    return url.startsWith("http") || url.startsWith("www");
  }

  const applyNow = link => {
    let valid = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"/;
    return link.match(valid)[1];
  }



  return (
    <>
      <Link to="/jobs"></Link>
      {loading && (<Spinner />)}
      {error.error && (<Error />)}
      {job.title}

      {posting && !error.error && (
        <div className="job__details">
          <div className="job__details__header">
            {posting.company_logo && (<img src={posting.company_logo} alt={`${posting.company} company logo`} />)}
            {!posting.company_logo && (<div className="no-logo" style={{ backgroundColor: color }}>n / a</div>)}
          </div>
          <div className="header">
            <h1 className="header__heading">{posting.company}</h1>
            <h3 className="header__company-url">{shortenedUrl(posting.company_url)}</h3>
          </div>
          <div className={`header__company-redirect ${!probablyFunctionalSite(posting.company_url) ? 'invalid' : ""}`}>
            <a className="button" target="_blank" rel="noopener noreferrer" href={posting.company_url}>
              Company site
            </a>
          </div>
          <div className="job__details__body">
            <div className="body__heading">
              <span className="body__heading__time">{moment(posting.created_at).fromNow()}</span>
              <span style={{margin: "0 10px"}}>•</span>
              <span className="body__heading__type">{posting.type}</span>
              <h1 className="body__heading__title">{posting.title}</h1>
              <h3 className="body__heading__location">{posting.location}</h3>
            </div>
            
          </div>
        </div>
      
      
      )}

    </>
  )
}
export default JobPostingDetails;


                  