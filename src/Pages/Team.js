import React from "react";
import Breadcrumb from "../Components/Team/Breadcrumb";
import CaseStudy from "../Components/Team/CaseStudy";
import Counter from "../Components/Team/Counter";
import Teams from "../Components/Team/Teams";
import Testimonial from "../Components/Team/Testimonial";
import Video from "../Components/Team/Video";

const Team = () => {
  return (
    <>
      <Breadcrumb />
      <Teams />
      <Counter />
      <CaseStudy />
      <Video />
      <Testimonial />
    </>
  );
};

export default Team;
