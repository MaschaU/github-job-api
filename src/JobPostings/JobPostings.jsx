import React from "react";
import { useJobsContext } from "../JobsContext";
import { Link } from "react-router-dom";
import * as moment from "moment";
import LinesEllipsis from "react-lines-ellipsis";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";
import "./JobPostings.scss";

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

const shortenedUrl = (url) => {
  // if (url === null || url.length === 0 || url === "http:" || url === "https:") {
  if (!url || url === "http:" || url === "https:") {
    return "";
  }

  const { hostname } = new URL(url);
  if (hostname.startsWith("www.")) {
    return hostname.substring(4);
  }
  return hostname;
  // a no-go
  // return url = url && url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0];
};

const probablyFunctionalSite = (url) => {
  if (!url) return false;
  return url.startsWith("http") || url.startsWith("www");
  // 1/10 would not recommend. readability issues
  // let functional = new RegExp(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi);
  // return functional.test(url)
};

export const JobPosting = ({
  id,
  color,
  title,
  company_logo,
  company,
  created_at,
  company_url,
  location,
}) => (
  <div>
    <Link to={`/job/${id}`}>{title}</Link>
    <div className="jobs__container">
      <div className="jobs__container__header">
        <div className="header__image__container">
          <div className="thumbnail__image__container">
            {company_logo ? (
              <img src={company_logo} alt={`${company} company logo`} />
            ) : (
              <div className="no-logo" style={{ backgroundColor: color }}></div>
            )}
          </div>
        </div>
        <div className="header__text">
          <div className="textbox__inner">
            <h1 className="header__text__heading">{company}</h1>
            <span>{moment(created_at).fromNow()}</span>
            <p>{shortenedUrl(company_url)}</p>
            <ResponsiveEllipsis
              className="thumbnail__title"
              text={title}
              component="h2"
              maxLine={2}
            />
            <ResponsiveEllipsis
              className="thumbnail__location"
              text={location}
              component="small"
            />
          </div>
          <div className="header__text__company-redirect">
            <div
              className={`header__text__company-redirect ${
                !probablyFunctionalSite(company_url) ? "invalid" : ""
              }`}
            >
              <a
                className="button"
                target="_blank"
                rel="noopener noreferrer"
                href={company_url}
              >
                Company site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const JobPostings = ({ match }) => {
  const color = colors[Math.floor(Math.random() * colors.length)];
  const {
    data: { jobs },
  } = useJobsContext();

  return jobs.map((job) => (
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
    />
  ));
};

export default JobPostings;
