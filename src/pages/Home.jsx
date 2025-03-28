import React, { useEffect } from "react";
import { Blogs, HomeHero, OurTeams, Showcase, Testimonials } from "../sections";
import Courses from "../sections/Home/Courses";
import Why from "../sections/About/Why";
import What from "../sections/About/What";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <HomeHero />
      {/* <Why /> */}
      <What />
      <Courses />
      <Blogs />
      <Showcase />
      <OurTeams />
      <Testimonials />
    </>
  );
};

export default Home;
