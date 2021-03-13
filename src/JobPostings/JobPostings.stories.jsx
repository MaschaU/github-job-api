import React from "react";

import { JobPosting } from "./JobPostings";
import { defaultContext, JobsContext } from "../JobsContext";
import { BrowserRouter as Router } from "react-router-dom";
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
};
