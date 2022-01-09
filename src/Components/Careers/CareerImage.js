import React from "react";

const CareerImage = () => {
  return (
    <>
      <div className="career-area pt-100 pb-100">
        <div className="container">
          <div className="row mt-none-30">
            <div className="col-xl-12">
              <div className="career__bg">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 mt-30">
                    <img src="assets/images/bg/careers-bg-1.jpeg" alt="" />
                  </div>
                  <div className="col-xl-6 col-lg-6 mt-30">
                    <img src="assets/images/bg/careers-bg-2.jpeg" alt="" />
                  </div>
                </div>
                <a href="index.html" className="site-btn">
                  TechBuzz.
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10 mt-30">
              <img src="assets/images/bg/careers-bg-3.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerImage;
