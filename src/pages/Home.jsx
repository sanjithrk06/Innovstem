import React from "react";
import { Blogs, HCourses, Services, Testimonials } from "../sections";
import Connections from "./../sections/Home/Connections";
import Courses from "../sections/Home/Courses";
const Home = () => {
  return (
    <>
      <div>Home</div>
      <Services />
      <Courses />
      <Blogs />
      {/* <Connections /> */}
      <Testimonials />
    </>
  );
};

export default Home;
