import React from "react";

const Cta = () => {
  return (
    <>
      <section
        className="cta__area pt-95 pb-100 bg_img"
        data-background="assets/images/bg/cta-bg-1.jpeg"
        data-overlay="dark"
        data-opacity="6">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 text-center">
              <div className="section__heading white mb-40">
                <h4 className="section__heading--title-small">
                  <span className="mr-10">\\</span> Call to action
                  <span className="ml-10">\\</span>
                </h4>
                <h2 className="section__heading--title">
                  We Are Waiting For Your Possitive Response<span>.</span>
                </h2>
              </div>
              <div className="cta__btns">
                <a href="services.html" className="site-btn">
                  Our Service <span>+</span>
                </a>
                <a href="about.html" className="site-btn white transparent">
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

export default Cta;
