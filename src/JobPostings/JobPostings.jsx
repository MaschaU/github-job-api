import React from "react";
import { useJobsContext } from "../JobsContext";
import { Link } from "react-router-dom";
import * as moment from "moment";
import LinesEllipsis from "react-lines-ellipsis";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";
import "./JobPostings.scss";
import PropTypes from "prop-types";
import SearchBar from "../SearchBar/SearchBar";

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

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

// const shortenedUrl = (url) => {
//   // if (url === null || url.length === 0 || url === "http:" || url === "https:") {
//   if (!url || url === "http:" || url === "https:") {
//     return "";
//   }

//   const { hostname } = new URL(url);
//   if (hostname.startsWith("www.")) {
//     return hostname.substring(4);
//   }
//   return hostname;
//   // a no-go
//   // return url = url && url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0];
// };

// const probablyFunctionalSite = (url) => {
// if (!url) return false;
// return url.startsWith("http") || url.startsWith("www");
// 1/10 would not recommend. readability issues
// let functional = new RegExp(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi);
// return functional.test(url)
// };

export const JobPosting = ({
  id,
  color,
  title,
  company_logo,
  company,
  created_at,
  location,
  type,
}) => (
  <Link className="card" to={`/job/${id}`}>
    <div className="card__header">
      <div className="card__logo">
        {company_logo ? (
          <img
            src={company_logo}
            alt={`${company} company logo`}
            style={{ backgroundColor: color }}
          />
        ) : (
          <div
            className="card__no-logo"
            style={{ backgroundColor: color }}
          ></div>
        )}
      </div>
    </div>
    <span className="card__span">{moment(created_at).fromNow()}</span>
    <span className="card__span">&#8226;</span>
    <span className="card__span">{type}</span>
    <div className="card__body">
      <ResponsiveEllipsis
        className="thumbnail__title"
        text={title}
        component="h2"
        maxLine={2}
      />
      <small>{company}</small>
    </div>
    <div className="card__footer">
      <ResponsiveEllipsis
        className="thumbnail__location"
        text={location}
        component="small"
      />
    </div>
  </Link>
);

JobPosting.propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  company_logo: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

const JobPostings = ({ match }) => {
  const color = colors[Math.floor(Math.random() * colors.length)];
  const {
    data: { jobs },
  } = useJobsContext();

  return (
    <div>
      <SearchBar />
      <div className="cards-container">
        {jobs.map((job) => (
          <JobPosting
            key={job.id}
            color={color}
            id={job.id}
            title={job.title}
            company_logo={job.company_logo}
            company={job.company}
            created_at={job.created_at}
            company_url={job.company_url}
            location={job.location}
            type={job.type}
          />
        ))}
      </div>
    </div>
  );
};

export default JobPostings;
