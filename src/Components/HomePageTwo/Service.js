import React from "react";

const Service = () => {
  return (
    <>
      <section className="service-area pt-115 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 text-center">
              <div className="section__heading mb-90">
                <h4 className="section__heading--title-small">
                  <span className="mr-10">\\</span>services
                  <span className="ml-10">\\</span>
                </h4>
                <h1 className="section__heading--transparent">Services</h1>
                <h2 className="section__heading--title">
                  Data Analytics, Content & IT <br />
                  Managed Service<span>.</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row mt-none-60">
            <div className="col-xl-4 col-lg-6 col-md-12 mt-60">
              <div className="service__box service__box--2">
                <div className="content">
                  <h2 className="title mb-15">Design &amp; Development</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectet ur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="thumb">
                  <img src="assets/images/icons/service-1.png" alt="" />
                </div>
                <a href="service-details.html" className="icon">
                  <i className="fal fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 mt-60">
              <div className="service__box service__box--2">
                <div className="content">
                  <h2 className="title mb-15">IT Management</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectet ur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="thumb">
                  <img src="assets/images/icons/service-2.png" alt="" />
                </div>
                <a href="service-details.html" className="icon">
                  <i className="fal fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 mt-60">
              <div className="service__box service__box--2">
                <div className="content">
                  <h2 className="title mb-15">Cloud Computing</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectet ur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="thumb">
                  <img src="assets/images/icons/service-3.png" alt="" />
                </div>
                <a href="service-details.html" className="icon">
                  <i className="fal fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
