import React from "react";

const AboutUs = () => {
  return (
    <>
      <section className="about__area about__area--4 pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="about__bg about__bg--4">
                <img
                  src="assets/images/bg/about-bg-3.jpeg"
                  data-tilt
                  data-tilt-perspective="3000"
                  alt=""
                />
                <img
                  className="f-right"
                  src="assets/images/bg/about-bg-4.jpeg"
                  data-tilt
                  data-tilt-perspective="3000"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 pl-20 mt-70">
              <div className="section__heading mb-30">
                <h4 className="section__heading--title-small">
                  <span className="mr-10">\\</span>about us
                </h4>
                <h2 className="section__heading--title">
                  We've Been Thriving In <br />
                  38 Years<span>.</span>
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
              <div className="about__box about__box--2">
                <p>
                  Labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitat ion ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
                <a href="about.html" className="site-btn mt-35">
                  Learn More <span>+</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
