import React from "react";

const Integration = () => {
  return (
    <>
      <section className="integration__area pt-125 pb-125">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="integration">
                <div className="row justify-content-center">
                  <div className="col-xl-8 text-center">
                    <div className="section__heading white mb-15">
                      <h4 className="section__heading--title-small">
                        <span className="mr-10">\\</span>Integration
                        <span className="ml-10">\\</span>
                      </h4>
                      <h1 className="section__heading--transparent">
                        Integration
                      </h1>
                      <h2 className="section__heading--title">
                        Seamless Integrations With <br />
                        Other Analytics Tools<span>.</span>
                      </h2>
                    </div>
                    <div className="integration__content">
                      <p>
                        Polygon absolutely works great with tools in your other
                        existing platform. <br />
                        Now its time to leave a commnet here.
                      </p>
                      <div className="integration__btns mt-35">
                        <a href="services.html" className="site-btn">
                          Our Service <span>+</span>
                        </a>
                        <a href="about.html" className="site-btn transparent">
                          Learn More <span>+</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="integration__icon">
                  <div className="integration__icons--box">
                    <i className="fab fa-java"></i>
                  </div>
                  <div className="integration__icons--box">
                    <i className="fab fa-wordpress"></i>
                  </div>
                  <div className="integration__icons--box">
                    <i className="fab fa-css3"></i>
                  </div>
                  <div className="integration__icons--box">
                    <i className="fab fa-python"></i>
                  </div>
                  <div className="integration__icons--box">
                    <i className="fab fa-dropbox"></i>
                  </div>
                  <div className="integration__icons--box">
                    <i className="fab fa-google"></i>
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

export default Integration;
