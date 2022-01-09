import React from "react";

const Testimonial = () => {
  return (
    <>
      <section className="testimonial__area grey-bg pt-95 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 text-center">
              <div className="section__heading mb-50">
                <h4 className="section__heading--title-small">
                  <span className="mr-10">\\</span>Testimonials
                  <span className="ml-10">\\</span>
                </h4>
                <h1 className="section__heading--transparent white">
                  Feedback
                </h1>
                <h2 className="section__heading--title">
                  Users Feedback<span>.</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="testimonials__2 testimonials__3 testimonials__4 owl-carousel">
                <div className="testimonial">
                  <h4 className="title mb-25">Design & Support</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consect etur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore to
                    magna aliqua. Ut enim ad minim veniam, quis nostrud a
                    exercitation ullamco laboris nisi ut aliquip.
                  </p>
                  <div className="authore mt-35 d-flex align-items-center">
                    <div className="authore--thumb mr-20">
                      <img
                        src="assets/images/others/testimonial-authore-2.png"
                        alt=""
                      />
                    </div>
                    <div className="authore--content">
                      <h5 className="name">Rosalina D. William</h5>
                      <span className="designatin">Founder, Romada Co.</span>
                    </div>
                  </div>
                  <img
                    src="assets/images/icons/quote-2.png"
                    alt=""
                    className="quote-icon"
                  />
                </div>
                <div className="testimonial">
                  <h4 className="title mb-25">Great Quality Software</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consect etur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore to
                    magna aliqua. Ut enim ad minim veniam, quis nostrud a
                    exercitation ullamco laboris nisi ut aliquip.
                  </p>
                  <div className="authore mt-35 d-flex align-items-center">
                    <div className="authore--thumb mr-20">
                      <img
                        src="assets/images/others/testimonial-authore-3.png"
                        alt=""
                      />
                    </div>
                    <div className="authore--content">
                      <h5 className="name">Rosalina D. William</h5>
                      <span className="designatin">Founder, Romada Co.</span>
                    </div>
                  </div>
                  <img
                    src="assets/images/icons/quote-2.png"
                    alt=""
                    className="quote-icon"
                  />
                </div>
                <div className="testimonial">
                  <h4 className="title mb-25">Development</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consect etur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore to
                    magna aliqua. Ut enim ad minim veniam, quis nostrud a
                    exercitation ullamco laboris nisi ut aliquip.
                  </p>
                  <div className="authore mt-35 d-flex align-items-center">
                    <div className="authore--thumb mr-20">
                      <img
                        src="assets/images/others/testimonial-authore-3.png"
                        alt=""
                      />
                    </div>
                    <div className="authore--content">
                      <h5 className="name">Rosalina D. William</h5>
                      <span className="designatin">Founder, Romada Co.</span>
                    </div>
                  </div>
                  <img
                    src="assets/images/icons/quote-2.png"
                    alt=""
                    className="quote-icon"
                  />
                </div>
                <div className="testimonial">
                  <h4 className="title mb-25">Great Quality Software</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consect etur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore to
                    magna aliqua. Ut enim ad minim veniam, quis nostrud a
                    exercitation ullamco laboris nisi ut aliquip.
                  </p>
                  <div className="authore mt-35 d-flex align-items-center">
                    <div className="authore--thumb mr-20">
                      <img
                        src="assets/images/others/testimonial-authore-1.png"
                        alt=""
                      />
                    </div>
                    <div className="authore--content">
                      <h5 className="name">Rosalina D. William</h5>
                      <span className="designatin">Founder, Romada Co.</span>
                    </div>
                  </div>
                  <img
                    src="assets/images/icons/quote-2.png"
                    alt=""
                    className="quote-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="brand__carousel mt-75 owl-carousel">
                <div className="brand">
                  <img src="assets/images/brand/brand-1.png" alt="" />
                </div>
                <div className="brand">
                  <img src="assets/images/brand/brand-2.png" alt="" />
                </div>
                <div className="brand">
                  <img src="assets/images/brand/brand-3.png" alt="" />
                </div>
                <div className="brand">
                  <img src="assets/images/brand/brand-4.png" alt="" />
                </div>
                <div className="brand">
                  <img src="assets/images/brand/brand-5.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
