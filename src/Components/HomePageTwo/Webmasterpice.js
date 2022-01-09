import React from "react";

const Webmasterpice = () => {
  return (
    <>
      <section className="webmasterpice-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="section__heading mb-35">
                <h4 className="section__heading--title-small">
                  <span className="mr-10">\\</span>What We Do Best
                </h4>
                <h2 className="section__heading--title">
                  Create Your Own Web Masterpiece<span>.</span>
                </h2>
                <div className="section__heading--content mt-20">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris.
                  </p>
                </div>
              </div>
              <div className="webmasterpice__content mt-35">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore to magna
                  aliqua. Ut enim ad minim veniam, quis nostrud a exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit.
                </p>
                <a href="about.html" className="site-btn mt-35">
                  Learn More <span>+</span>
                </a>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="row webmasterpice">
                <div className="col-xl-6 col-lg-6">
                  <div className="webmasterpice__box">
                    <div className="icon">
                      <img
                        src="assets/images/icons/webmasterpice-1.png"
                        alt=""
                      />
                    </div>
                    <span>Mobile Friendly Design</span>
                  </div>
                  <div className="webmasterpice__box mt-30">
                    <div className="icon">
                      <img
                        src="assets/images/icons/webmasterpice-2.png"
                        alt=""
                      />
                    </div>
                    <span>Retina Ready Display</span>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 align-self-center">
                  <div className="webmasterpice__box webmasterpice__box--grey">
                    <div className="icon">
                      <img
                        src="assets/images/icons/webmasterpice-3.png"
                        alt=""
                      />
                    </div>
                    <span>Digital Marker Solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Webmasterpice;
