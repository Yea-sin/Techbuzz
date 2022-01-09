import React from "react";
import About from "../../Components/Services/About";
import Breadcrumb from "../../Components/Services/Breadcrumb";
import Cta from "../../Components/Services/Cta";
import Pricing from "../../Components/Services/Pricing";
import Service from "../../Components/Services/Service";

const Services = () => {
  return (
    <>
      <Breadcrumb />
      <Service />
      <About />
      <Pricing />
      <Cta />
    </>
  );
};

export default Services;
