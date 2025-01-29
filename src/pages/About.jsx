import React from "react";
import {
  AboutConnection,
  AboutWhat,
  AboutWhy,
  VisionMission,
} from "../sections";

const About = () => {
  return (
    <>
      {/* <AboutHero /> */}
      <AboutWhy />
      <VisionMission />
      <AboutWhat />
      <AboutConnection />
    </>
  );
};

export default About;