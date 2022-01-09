import React from "react";

const Process = () => {
  return (
    <>
      <section className="process__area pt-95 pb-95">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 text-center">
              <div className="section__heading mb-45">
                <h4 className="section__heading--title-small">
                  <span className="mr-10">\\</span>process
                  <span className="ml-10">\\</span>
                </h4>
                <h1 className="section__heading--transparent">Process</h1>
                <h2 className="section__heading--title">
                  How We Claim To Excel<span>.</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row mt-none-30">
            <div className="col-xl-4 col-lg-6 col-md-12 mt-30">
              <div className="process__box">
                <div className="process__box--thumb">
                  <img src="assets/images/service/process-1.jpeg" alt="" />
                  <a
                    href="service-details.html"
                    className="site-btn transparent white">
                    Learn More <span>+</span>
                  </a>
                </div>
                <div className="process__box--content">
                  <h4 className="title">Management System</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consect et ur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua enim ad minim.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 mt-30">
              <div className="process__box">
                <div className="process__box--thumb">
                  <img src="assets/images/service/process-2.jpeg" alt="" />
                  <a
                    href="service-details.html"
                    className="site-btn transparent white">
                    Learn More <span>+</span>
                  </a>
                </div>
                <div className="process__box--content">
                  <h4 className="title">Cpu Data Analytics</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consect et ur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua enim ad minim.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 mt-30">
              <div className="process__box">
                <div className="process__box--thumb">
                  <img src="assets/images/service/process-3.jpeg" alt="" />
                  <a
                    href="service-details.html"
                    className="site-btn transparent white">
                    Learn More <span>+</span>
                  </a>
                </div>
                <div className="process__box--content">
                  <h4 className="title">Multifunctional Tech</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consect et ur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua enim ad minim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;
