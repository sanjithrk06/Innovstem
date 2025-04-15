import React, { useEffect } from "react";
import { ServiceContent, ServiceHero } from "../components";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <ServiceHero />
      <ServiceContent />
    </>
  );
};

export default Services;
