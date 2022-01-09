import React from "react";

const About = () => {
  return (
    <>
      <section className="about__area about__area--5 about__area--6">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="about__wrap about__wrap--2 about__wrap--3">
                <div className="row">
                  <div className="col-xl-6">
                    <div
                      className="about__bg about__bg--6 bg_img"
                      data-background="assets/images/bg/about-bg-7.jpeg"></div>
                  </div>
                  <div className="col-xl-6">
                    <div className="skill-wrap skill-wrap--2">
                      <div className="section__heading mb-30">
                        <h4 className="section__heading--title-small">
                          <span className="mr-10">\\</span>about us
                        </h4>
                        <h2 className="section__heading--title">
                          We've Been Thriving In <br />
                          38 Years<span>.</span>
                        </h2>
                      </div>
                      <div className="skill">
                        <div className="skill__box mb-30">
                          <h4 className="title">Interior Design</h4>
                          <div className="progress">
                            <div
                              className="progress-bar wow slideInLeft"
                              role="progressbar"
                              style={{
                                width: "92%",
                                visibility: "visible",
                                animationDuration: "1s",
                                animationDelay: "0.5s",
                                animationName: "slideInLeft",
                              }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              data-wow-duration="1s"
                              data-wow-delay=".5s">
                              <span>72%</span>
                            </div>
                          </div>
                        </div>
                        <div className="skill__box mb-30">
                          <h4 className="title">Architecture Develop</h4>
                          <div className="progress">
                            <div
                              className="progress-bar wow slideInLeft"
                              role="progressbar"
                              style={{
                                width: "67%",
                                visibility: "visible",
                                animationDuration: "1s",
                                animationDelay: "0.5s",
                                animationName: "slideInLeft",
                              }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              data-wow-duration="1s"
                              data-wow-delay=".5s">
                              <span>67%</span>
                            </div>
                          </div>
                        </div>
                        <div className="skill__box mb-30">
                          <h4 className="title">Best UIX Design</h4>
                          <div className="progress">
                            <div
                              className="progress-bar wow slideInLeft"
                              role="progressbar"
                              style={{
                                width: "81%",
                                visibility: "visible",
                                animationDuration: "1s",
                                animationDelay: "0.5s",
                                animationName: "slideInLeft",
                              }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              data-wow-duration="1s"
                              data-wow-delay=".5s">
                              <span>81%</span>
                            </div>
                          </div>
                        </div>
                        <div className="skill__box">
                          <h4 className="title">Web Development</h4>
                          <div className="progress">
                            <div
                              className="progress-bar wow slideInLeft"
                              role="progressbar"
                              style={{
                                width: "62%",
                                visibility: "visible",
                                animationDuration: "1s",
                                animationDelay: "0.5s",
                                animationName: "slideInLeft",
                              }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              data-wow-duration="1s"
                              data-wow-delay=".5s">
                              <span>62%</span>
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
