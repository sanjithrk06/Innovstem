import React, { useEffect } from "react";
import { ServiceContent, ServiceHero } from "../components";
import { Helmet } from "react-helmet-async";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Helmet>
        <title>Services</title>
      </Helmet>
      <ServiceHero />
      <ServiceContent />
    </>
  );
};

export default Services;
