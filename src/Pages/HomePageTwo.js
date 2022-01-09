import React from "react";
import About from "../Components/HomePageTwo/About";
import Banner from "../Components/HomePageTwo/Banner";
import Blog from "../Components/HomePageTwo/Blog";
import Cta from "../Components/HomePageTwo/Cta";
import Department from "../Components/HomePageTwo/Department";
import Faq from "../Components/HomePageTwo/Faq";
import Integration from "../Components/HomePageTwo/Integration";
import Newslater from "../Components/HomePageTwo/Newslater";
import Process from "../Components/HomePageTwo/Process";
import Service from "../Components/HomePageTwo/Service";
import Webmasterpice from "../Components/HomePageTwo/Webmasterpice";

const HomePageTwo = () => {
  return (
    <>
      <Banner />
      <Department />
      <Service />
      <About />
      <Process />
      <Faq />
      <Integration />
      <Webmasterpice />
      <Cta />
      <Blog />
      <Newslater />
    </>
  );
};

export default HomePageTwo;
