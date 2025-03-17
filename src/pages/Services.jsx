import React, { useEffect } from "react";
import { Content, ServiceHero } from "../sections";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <ServiceHero />
      <Content />
    </>
  );
};

export default Services;
