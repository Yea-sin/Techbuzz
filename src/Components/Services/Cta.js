import React from "react";

const Cta = () => {
  return (
    <>
      <section
        className="cta__area cta__area--2 cta__area--3 pt-95 pb-95 bg_img"
        data-background="assets/images/bg/cta-bg-3.jpeg">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="section__heading mb-40">
                <h4 className="section__heading--title-small">
                  <span className="mr-10">\\</span> Call to action
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
            </div>
            <div className="col-xl-6 text-right">
              <a href="contact.html" className="site-btn mt-95">
                Get Started Now <span>+</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
