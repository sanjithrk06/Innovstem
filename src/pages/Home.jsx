import React, { useEffect } from "react";
import {
  HomeAbout,
  HomeBlogs,
  HomeCourses,
  HomeHero,
  OurTeams,
  Showcase,
  Testimonials,
} from "../components";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeCourses />
      <HomeBlogs />
      <Showcase />
      <OurTeams />
      <Testimonials />
    </>
  );
};

export default Home;
