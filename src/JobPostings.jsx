import React, { useContext } from "react";
import { JobsContext } from "./JobsContext";
import { Link } from 'react-router-dom'

const JobPostings = ({match}) => {
    const { data: {jobs}} = useContext(JobsContext);
    const shortenedUrl = (url) => {
        return url = url && url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0];
    }

    return(
        jobs.map((job) => (
            <div key={job.id} >
                <Link to={`/job/${job.id}`}>{job.title}</Link>
                
                <div className="job__listing">
                <div className="job__listing__header">
                    <div className="header__image__container">
                    {job.company_logo && (<img src={job.company_logo} alt={`${job.company} company logo`} />)}
                    </div>
                    <div className="header__textbox">
                        <div className="textbox__inner">
                            <h1 className="header__textbox__heading">{job.company}</h1>
                            <p className="header__textbox__site">{shortenedUrl(job.company_url)}</p>
                        </div>
                        <div className="header__textbox__company-redirect" >
                            {job.company_url}
                            <a href={job.company_url}>
                                Company site
                            </a>
                            <small>No company site</small>
                        </div>
                    </div>
                </div>
                
            </div>
            </div> 
        ))
        
    )
}

export default JobPostings;