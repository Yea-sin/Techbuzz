import React from "react";
import BreadCrumb from "../Components/Contact/BreadCrumb";
import ContactForm from "../Components/Contact/ContactForm";
import ContactInfo from "../Components/Contact/ContactInfo";
import Map from "../Components/Contact/Map";

const Contact = () => {
  return (
    <>
      <BreadCrumb />
      <ContactForm />
      <ContactInfo />
      <Map />
    </>
  );
};

export default Contact;
