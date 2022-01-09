import React from "react";
import About from "../Components/WhyChooseUs/About";
import Breadcrumb from "../Components/WhyChooseUs/Breadcrumb";
import ChooseArea from "../Components/WhyChooseUs/ChooseArea";
import Counter from "../Components/WhyChooseUs/Counter";
import Cta from "../Components/WhyChooseUs/Cta";
import NewsFeed from "../Components/WhyChooseUs/NewsFeed";

const WhyChooseUs = () => {
  return (
    <>
      <Breadcrumb />
      <ChooseArea />
      <About />
      <Counter />
      <Cta />
      <NewsFeed />
    </>
  );
};

export default WhyChooseUs;
