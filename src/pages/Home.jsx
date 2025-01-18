import React from "react";
import { Blogs, Courses, Services, Testimonials } from "../sections";
import Connections from "./../sections/Home/Connections";
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
