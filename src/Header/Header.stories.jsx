import React from "react";

import Header from "./Header";
import { defaultContext, JobsContext } from "../JobsContext";
export default {
  title: "Magic/Header",
  component: Header,
};

const Template = () => (
  <JobsContext.Provider value={defaultContext}>
    <Header />
  </JobsContext.Provider>
);

export const Base = Template.bind({});

