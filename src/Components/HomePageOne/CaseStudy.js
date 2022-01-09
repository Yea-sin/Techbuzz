import React from "react";

const CaseStudy = () => {
  return (
    <>
      <section
        className="casestudy-area pt-95 pb-100 bg_img"
        data-background="assets/images/pattern/case-study-pattern.png">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 text-center">
              <div className="section__heading mb-60">
                <h4 className="section__heading--title-small">
                  <span className="mr-10">||</span>Case Study
                  <span className="ml-10">||</span>
                </h4>
                <h1 className="section__heading--transparent">Portfolio</h1>
                <h2 className="section__heading--title">Our Portfolio/Works</h2>
              </div>
            </div>
          </div>
          <div className="row mt-none-30">
            <div className="col-xl-4 col-lg-6 mt-30">
              <div className="casestudy__box">
                <div className="casestudy__box--thumb">
                  <img src="assets/images/service/case-study-1.jpeg" alt="" />
                </div>
                <div className="casestudy__box--content">
                  <h5 className="sub-title">Software Solutions</h5>
                  <h4 className="title">Kesemiro Software Solution</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 mt-30">
              <div className="casestudy__box">
                <div className="casestudy__box--thumb">
                  <img src="assets/images/service/case-study-2.jpeg" alt="" />
                </div>
                <div className="casestudy__box--content">
                  <h5 className="sub-title">App Solutions</h5>
                  <h4 className="title">Kesemiro App Solution</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 mt-30">
              <div className="casestudy__box">
                <div className="casestudy__box--thumb">
                  <img src="assets/images/service/case-study-3.jpeg" alt="" />
                </div>
                <div className="casestudy__box--content">
                  <h5 className="sub-title">Web Solutions</h5>
                  <h4 className="title">Kesemiro Web Solution</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudy;
