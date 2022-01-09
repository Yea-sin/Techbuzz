import React from "react";
import Breadcrumb from "../Components/Faq/Breadcrumb";
import Cta from "../Components/Faq/Cta";
import FaqArea from "../Components/Faq/FaqArea";
import FaqSearch from "../Components/Faq/FaqSearch";

const Faq = () => {
  return (
    <>
      <Breadcrumb />
      <FaqSearch />
      <FaqArea />
      <Cta />
    </>
  );
};

export default Faq;
