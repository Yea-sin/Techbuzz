import React from "react";

const Service = () => {
  return (
    <>
      <section className="service-area pt-95 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 text-center">
              <div className="section__heading mb-60">
                <h4 className="section__heading--title-small">
                  <span className="mr-10">||</span> services{" "}
                  <span className="ml-10">||</span>
                </h4>
                <h1 className="section__heading--transparent">Services</h1>
                <h2 className="section__heading--title">
                  Data Analytics, Content & IT <br />
                  Managed Service<span>.</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row mt-none-30">
            <div className="col-xl-6 col-lg-6 mt-30">
              <div className="service__box">
                <div className="thumb mb-35">
                  <img src="assets/images/service/service-1.jpeg" alt="" />
                </div>
                <div className="content">
                  <h2 className="title mb-15">Advanced Analytics</h2>
                  <p>
                    Today, the term Information Technology (IT) has ballooned to
                    encompass many aspects of computing and technology.
                  </p>
                  <ul className="service__box--lists mt-45">
                    <li>
                      <span className="icon">
                        <i className="fal fa-check"></i>
                      </span>{" "}
                      The Information Technology umbrella
                    </li>
                    <li>
                      <span className="icon">
                        <i className="fal fa-check"></i>
                      </span>{" "}
                      Can be quite large, covering many fields
                    </li>
                    <li>
                      <span className="icon">
                        <i className="fal fa-check"></i>
                      </span>{" "}
                      IT professionals perform a variety
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 mt-30">
              <div className="service__box">
                <div className="thumb mb-35">
                  <img src="assets/images/service/service-2.jpeg" alt="" />
                </div>
                <div className="content">
                  <h2 className="title mb-15">Content Management</h2>
                  <p>
                    Today, the term Information Technology (IT) has ballooned to
                    encompass many aspects of computing and technology.
                  </p>
                  <ul className="service__box--lists mt-45">
                    <li>
                      <span className="icon">
                        <i className="fal fa-check"></i>
                      </span>{" "}
                      The Information Technology umbrella
                    </li>
                    <li>
                      <span className="icon">
                        <i className="fal fa-check"></i>
                      </span>{" "}
                      Can be quite large, covering many fields
                    </li>
                    <li>
                      <span className="icon">
                        <i className="fal fa-check"></i>
                      </span>{" "}
                      IT professionals perform a variety
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
