import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contactinfo__area">
        <div className="container">
          <div className="row mt-none-30">
            <div className="col-xl-4 col-lg-6 mt-30">
              <div className="contact__info">
                <div className="icon">
                  <i className="fal fa-map"></i>
                  <span>
                    <i className="fal fa-check"></i>
                  </span>
                </div>
                <div className="content">
                  <h2 className="title">Office Address</h2>
                  <p>
                    99 NY Address street, Brooklyn, <br />
                    United State
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 mt-30">
              <div className="contact__info contact__info--black">
                <div className="icon">
                  <i className="fal fa-phone"></i>
                  <span>
                    <i className="fal fa-check"></i>
                  </span>
                </div>
                <div className="content">
                  <h2 className="title">Phone Number</h2>
                  <a href="tel:87575564647658">875 7556 464 765 8</a>
                  <a href="tel:76564856798">765 648 567 98</a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 mt-30">
              <div className="contact__info contact__info--blue">
                <div className="icon">
                  <i className="fal fa-globe"></i>
                  <span>
                    <i className="fal fa-check"></i>
                  </span>
                </div>
                <div className="content">
                  <h2 className="title">Web Connect</h2>
                  <a href="mailto:info@webmail.com">info@webmail.com</a>
                  <a href="mailto:webexample.com">webexample.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
