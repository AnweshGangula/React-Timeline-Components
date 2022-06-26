import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import "./styles.css";
import { Requirements } from "../components/Reuirements";

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  return <Requirements />;
});
