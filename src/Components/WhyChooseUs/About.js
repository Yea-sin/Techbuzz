import React from "react";

const About = () => {
  return (
    <>
      <section className="about__area about__area--2 about__area--3 pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="about__bg about__bg--2 about__bg--3 about__bg--5">
                <img src="assets/images/bg/about-bg-6.jpeg" alt="" />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="section__heading mb-30 mt-50">
                <h4 className="section__heading--title-small">
                  <span className="mr-10">\\</span>Get Support
                </h4>
                <h2 className="section__heading--title">
                  Just Make An Awesome Tour Here<span>.</span>
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
              <div className="about__box about__box--2 about__box--3 about__box--4">
                <ul className="nav" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="/chooseUs"
                      role="tab"
                      data-toggle="tab">
                      Our Values
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/chooseUs"
                      role="tab"
                      data-toggle="tab">
                      Our Skills
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/chooseUs"
                      role="tab"
                      data-toggle="tab">
                      Our Mission
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    role="tabpanel"
                    className="tab-pane fade in active show"
                    id="tab-1">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt.
                    </p>
                  </div>
                  <div role="tabpanel" className="tab-pane fade" id="tab-2">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt.
                    </p>
                  </div>
                  <div role="tabpanel" className="tab-pane fade" id="tab-3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt.
                    </p>
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
