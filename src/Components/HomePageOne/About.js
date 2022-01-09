import React from "react";

const About = () => {
  return (
    <>
      <section className="about__area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="about__wrap pt-95 pb-95" data-overlay>
                <div className="row justify-content-end">
                  <div className="col-xl-6 col-lg-6">
                    <div className="about__bg">
                      <img src="assets/images/bg/about-bg-1.jpeg" alt="" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 mt-30">
                    <div className="section__heading mb-35">
                      <h4 className="section__heading--title-small">
                        <span className="mr-10">||</span>about us
                      </h4>
                      <h2 className="section__heading--title">
                        We've Been Thriving In <br />
                        38 Years<span>.</span>
                      </h2>
                      <div className="section__heading--content mt-20">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris.
                        </p>
                      </div>
                    </div>
                    <div className="about__box">
                      <div className="row mt-none-30">
                        <div className="col-xl-6 mt-30">
                          <div className="about__box--item">
                            <div className="about__box--icon">
                              <img
                                src="assets/images/icons/about-icon-1.png"
                                alt=""
                              />
                            </div>
                            <div className="about__box--content">
                              <h5 className="about__box--title">
                                Business Idea
                              </h5>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 mt-30">
                          <div className="about__box--item">
                            <div className="about__box--icon">
                              <img
                                src="assets/images/icons/about-icon-2.png"
                                alt=""
                              />
                            </div>
                            <div className="about__box--content">
                              <h5 className="about__box--title">
                                Move Forward
                              </h5>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default About;
