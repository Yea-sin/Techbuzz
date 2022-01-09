import React from "react";
import About from "../../Components/ServiceDetails/About";
import Breadcrumb from "../../Components/ServiceDetails/Breadcrumb";
import Feature from "../../Components/ServiceDetails/Feature";
import Pricing from "../../Components/ServiceDetails/Pricing";
import Service from "../../Components/ServiceDetails/Service";

const ServiceDetails = () => {
  return (
    <>
      <Breadcrumb />
      <About />
      <Service />
      <Feature />
      <Pricing />
    </>
  );
};

export default ServiceDetails;
