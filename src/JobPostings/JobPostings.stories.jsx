import React from "react";

import { JobPosting } from "./JobPostings";
import { defaultContext, JobsContext } from "../JobsContext";
import { BrowserRouter as Router } from "react-router-dom";
import acmeLogo from "../stories/acme.svg"

export default {
  title: "Magic/JobPosting",
  component: JobPosting,
};

const Template = (args) => (
  <Router>
    <JobPosting {...args} />
  </Router>
);

export const Base = Template.bind({});
Base.args = {
  color: "lime",
  company: "ACME",
  id: "whtvr",
  company_url: "https://www.acme.com/should-not-appear",
  company_logo: acmeLogo,
  created_at: new Date().toJSON(),
  location: "Mars",
  title: "mushroom harvester"
};

Base.argTypes = {
  color: {
    control: "color"
  }
};

export const WithoutLogo = Template.bind({});
WithoutLogo.args = {
  ...Base.args,
  company_logo: ""
};

WithoutLogo.argTypes = {
  ...Base.argTypes
}

