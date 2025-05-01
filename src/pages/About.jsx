import React from "react";
import {
  AboutBelieve,
  AboutConnection,
  AboutWhat,
  AboutWhy,
  CareerBannar,
  VisionMission,
} from "../components";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <AboutWhy />
      <VisionMission />
      <AboutBelieve />
      <AboutConnection />
      <CareerBannar />
    </>
  );
};

export default About;
