import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import "./styles.css";
import { HorizontalTimeline } from "../../src/components/HorizontalTimeline";

const stories = storiesOf("Horizontal Timeline Component", module);

stories.add("Horizontal Timeline", () => {
  // below timelineJSON variable is a representation of the JSON data that you can store in a separate file
  let timelineJSON = [
    { name: "IIT Kharagpur", title: "B.Arch", duration: "2012-2017", type: "education", category: "academic", },
    { name: "MIT", title: "Research Assistant", duration: "2018-2019", type: "education", category: "academic", },
    { name: "Pitcher AG", title: "Internship", duration: "May 2014 - Jun 2014", type: "experience", category: "professional", },
    { name: "Autodesk", title: "Internship", duration: "May 2015 - Jul 2015", type: "experience", category: "professional", },
    { name: "Agile Development Scrum Master", title: "Certification", duration: "Feb 2016", type: "education", category: "professional", },
    { name: "Google", title: "Web Designer", duration: "Aug 2017 - Mar 2020", type: "experience", category: "professional", },
    { name: "Amazon", title: "AR/VR Engineer", duration: "Mar 2020 - May 2021", type: "experience", category: "professional", },
    { name: "Meta", title: "Digital Reality Developer", duration: "Jun 2021 - present", type: "experience", category: "professional", },
  ];

  return <HorizontalTimeline timelineData={timelineJSON} />;
});
