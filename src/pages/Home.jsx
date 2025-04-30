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
import { Helmet } from "react-helmet-async";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
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
