import React from "react";
import Breadcrumb from "../Components/Portfolio/Breadcrumb";
import NewsFeed from "../Components/Portfolio/NewsFeed";
import PortfolioArea from "../Components/Portfolio/PortfolioArea";
import Testimonial from "../Components/Portfolio/Testimonial";

const Portfolio = () => {
  return (
    <>
      <Breadcrumb />
      <PortfolioArea />
      <Testimonial />
      <NewsFeed />
    </>
  );
};

export default Portfolio;
