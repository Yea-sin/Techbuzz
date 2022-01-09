import React from "react";
import BreadCrumb from "../Components/About/BreadCrumb";
import AboutUs from "../Components/About/AboutUs";
import Department from "../Components/About/Department";
import Support from "../Components/About/Support";
import Team from "../Components/About/Team";
import Timeline from "../Components/About/Timeline";

const About = () => {
  return (
    <>
      <BreadCrumb />
      <AboutUs />
      <Department />
      <Support />
      <Team />
      <Timeline />
    </>
  );
};

export default About;
