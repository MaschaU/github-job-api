import React from "react";
import Button from "./Button";

import '../scss/styles.scss';
import '../scss/stories-styles.scss';

export default {
    title: "Magic Button",
    component: Button,
}

const Template = (args) => (
    <>
        <Button {...args} />

        <div className="fake-body" data-theme="dark">
            <Button {...args} />
        </div>
    </>
);
export const Base = Template.bind({});
Base.args = {
    children: "Search",
};
