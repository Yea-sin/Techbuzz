import React from "react";
import About from "../Components/HomePageOne/About";
import Banner from "../Components/HomePageOne/Banner";
import CaseStudy from "../Components/HomePageOne/CaseStudy";
import NewsFeed from "../Components/HomePageOne/NewsFeed";
import Service from "../Components/HomePageOne/Service";
import Video from "../Components/HomePageOne/Video";
import WhyChoose from "../Components/HomePageOne/WhyChoose";

const HomePageOne = () => {
  return (
    <>
      <Banner />
      <Service />
      <About />
      <WhyChoose />
      <Video />
      <CaseStudy />
      <NewsFeed />
    </>
  );
};

export default HomePageOne;
