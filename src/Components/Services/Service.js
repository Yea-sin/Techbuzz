import React from "react";

const Service = () => {
  return (
    <>
      <section className="service-area pt-100 pb-100">
        <div className="container">
          <div className="row mt-none-30">
            <div className="col-xl-4 col-lg-6 col-md-12 mt-30 text-center">
              <div className="service__box service__box--2 service__box--3 service__box--4">
                <div className="icon">
                  <img src="assets/images/icons/service-7.png" alt="" />
                </div>
                <div className="content">
                  <h2 className="title mb-15">Managed IT services</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consect etur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
                <a href="service-details.html" className="inline-btn mt-15">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 mt-30 text-center">
              <div className="service__box service__box--2 service__box--3 service__box--4">
                <div className="icon">
                  <img src="assets/images/icons/service-7.png" alt="" />
                </div>
                <div className="content">
                  <h2 className="title mb-15">Backup and Recovery</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consect etur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
                <a href="service-details.html" className="inline-btn mt-15">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 mt-30 text-center">
              <div className="service__box service__box--2 service__box--3 service__box--4">
                <div className="icon">
                  <img src="assets/images/icons/service-7.png" alt="" />
                </div>
                <div className="content">
                  <h2 className="title mb-15">Cyber Security</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consect etur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
                <a href="service-details.html" className="inline-btn mt-15">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
