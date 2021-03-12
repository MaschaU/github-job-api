import React, { useContext } from "react";
import { JobsContext } from "./JobsContext";
import { Link } from 'react-router-dom'
import * as moment from 'moment' 
import TimeStamp from "./TimeStamp";

// bloody moment still not working.
// OOPSIE WOOPSIE!! Uwu we made a fucky wucky!!!
// A wittle fucko boingo! The code monkeys at our
// HQ are working vewy hard to fix this.

const JobPostings = ({ match }) => {
  const { data: { jobs } } = useContext(JobsContext);
  const shortenedUrl = (url) => {
    if (url === null || url.length === 0 || url === "http:" || url === "https:") {
      return "";
    }

    var testUrl = new URL(url).hostname;
    if (testUrl.startsWith("www.")) {
      return testUrl.substring(4);
    }
    return testUrl;
    // a no-go
    // return url = url && url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0];
  }

  const probablyFunctionalSite = url => {
    if (url === null) return false;
    return url.startsWith("http") || url.startsWith("www");
    // 1/10 would not recommend. readability issues
    // let functional = new RegExp(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi);
    // return functional.test(url)
  }




  return (

    jobs.map((job) => (
      <div>
        <div key={job.id} >
          <div>{console.log(job)}</div>
          <Link to={`/job/${job.id}`}>{job.title}</Link>

          <div className="jobs__container">
            <div className="jobs__container__header">
              <div className="header__image__container">
                {job.company_logo && (<img src={job.company_logo} alt={`${job.company} company logo`} />)}
              </div>
              <div className="header__text">
                <div className="textbox__inner">
                  <h1 className="header__text__heading">{job.company}</h1>
                  <p>{moment().to(job.created_at)}</p>
                  <p className="header__text__site">{shortenedUrl(job.company_url)}</p>
                </div>
                <div className="header__text__company-redirect" >
    

                  <div className={`header__text__company-redirect ${!probablyFunctionalSite(job.company_url) ? "invalid" : ""}`}>
                    <a className="button" target="_blank" rel="noopener noreferrer" href={job.company_url}>
                      Company site
                    </a>
      

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    ))

  )
}

export default JobPostings;