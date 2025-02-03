import React from "react";
import { Outlet } from "react-router-dom";
import { Banner, Footer, Header } from "../components";

const MainLayout = () => {
  return (
    <>
      <Banner />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
