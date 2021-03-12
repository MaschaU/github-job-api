import React, { useContext, useState } from "react";
import { JobsContext } from "./JobsContext";
import { Link } from 'react-router-dom';
import * as moment from 'moment';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);




// bloody moment still not working.
// OOPSIE WOOPSIE!! Uwu we made a fucky wucky!!!
// A wittle fucko boingo! The code monkeys at our
// HQ are working vewy hard to fix this.

const JobPostings = ({ match }) => {
  const colors = ["#df6dae", "#3db3d1", "#3D3B94", "#F0B62A", "#E66D39", "#222121", "#5964E0", "#FB7E66", 
                  "#007CFF", "#492A29", "#60DCAD", "#FF585F"];
  const [color] = useState(colors[Math.floor(Math.random() * colors.length)]);
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
          <Link to={`/job/${job.id}`}>{job.title}</Link>
          <div className="jobs__container">
            <div className="jobs__container__header">
              <div className="header__image__container">
              <div className="thumbnail__image__container">
                    { job.company_logo && (<img src={job.company_logo} alt={`${job.company} company logo`} />) }
                    { !job.company_logo && ( <div className="no-logo" style={{backgroundColor: color}}></div> )}
                </div>
                
              </div>
              <div className="header__text">
                <div className="textbox__inner">
                  <h1 className="header__text__heading">{job.company}</h1>
                  <span>{moment().to(job.created_at)}</span>
                  <p>{shortenedUrl(job.company_url)}</p>
                  <ResponsiveEllipsis
                    className="thumbnail__title"
                    text={job.title}
                    component="h2" 
                    maxLine={2}
                />
                <ResponsiveEllipsis
                    className="thumbnail__location"
                    text={job.location}
                    component="small"
                />
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