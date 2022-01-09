import React from "react";

const About = () => {
  return (
    <>
      <section className="about__area about__area--7 pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 pr-55">
              <div
                className="about__bg about__bg--7 bg_img"
                data-background="assets/images/bg/about-bg-2.jpeg"></div>
            </div>
            <div className="col-xl-6 col-lg-6 pl-20">
              <div className="about__wrap about__wrap--4">
                <div className="section__heading mb-35">
                  <h4 className="section__heading--title-small">
                    <span className="mr-10">\\</span>UI/UX Design
                  </h4>
                  <h2 className="section__heading--title">
                    Just Make An Awesome <br />
                    Tour Here<span>.</span>
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
                <div className="row mt-none-20">
                  <div className="col-xl-6 mt-20">
                    <ul className="service__box--lists">
                      <li>
                        <span className="icon">
                          <i className="fal fa-check"></i>
                        </span>{" "}
                        Web Template Design
                      </li>
                      <li>
                        <span className="icon">
                          <i className="fal fa-check"></i>
                        </span>{" "}
                        Theme Development
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-6 mt-20">
                    <ul className="service__box--lists">
                      <li>
                        <span className="icon">
                          <i className="fal fa-check"></i>
                        </span>{" "}
                        Game Design
                      </li>
                      <li>
                        <span className="icon">
                          <i className="fal fa-check"></i>
                        </span>{" "}
                        Illustration Design
                      </li>
                    </ul>
                  </div>
                </div>
                <a href="contact.html" className="site-btn">
                  Get Started Now <span>+ </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
