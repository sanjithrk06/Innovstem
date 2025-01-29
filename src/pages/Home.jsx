import React from "react";
import { Blogs, HCourses, HomeHero, Services, Testimonials } from "../sections";
import Connections from "./../sections/Home/Connections";
import Courses from "../sections/Home/Courses";
import Why from "../sections/About/Why";
import What from "../sections/About/What";
const Home = () => {
  return (
    <>
      <HomeHero />
      <Why />
      <What />
      <Courses />
      <Blogs />
      {/* <Connections /> */}
      <Testimonials />
    </>
  );
};

export default Home;
