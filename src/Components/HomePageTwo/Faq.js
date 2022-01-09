import React from "react";

const Faq = () => {
  return (
    <>
      <section className="faq__area grey-bg pt-95 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 align-self-center">
              <div className="faq__thumb text-center">
                <div
                  className="faq__thumb--big"
                  data-tilt
                  data-tilt-perspective="3000">
                  <img src="assets/images/others/faq-thumb-big.jpeg" alt="" />
                </div>
                <div
                  className="faq__thumb--1"
                  data-tilt
                  data-tilt-perspective="3000">
                  <img src="assets/images/others/faq-thumb-1.jpeg" alt="" />
                </div>
                <div
                  className="faq__thumb--2"
                  data-tilt
                  data-tilt-perspective="3000">
                  <img src="assets/images/others/faq-thumb-2.jpeg" alt="" />
                </div>
                <div
                  className="faq__thumb--3"
                  data-tilt
                  data-tilt-perspective="3000">
                  <img src="assets/images/others/faq-thumb-3.jpeg" alt="" />
                </div>
                <div
                  className="faq__thumb--4"
                  data-tilt
                  data-tilt-perspective="3000">
                  <img src="assets/images/others/faq-thumb-4.jpeg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 pl-30">
              <div className="section__heading mb-35">
                <h4 className="section__heading--title-small">
                  <span className="mr-10">\\</span>about us
                </h4>
                <h2 className="section__heading--title">
                  Get Your Answers<span>.</span>
                </h2>
              </div>
              <div className="accordion faqs" id="accordionFaq">
                <div className="card">
                  <div className="card__header" id="heading1">
                    <h5 className="mb-0 title">
                      <button
                        className="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse1"
                        aria-expanded="false"
                        aria-controls="collapse1">
                        First and foremost, you never want to go?
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapse1"
                    className="collapse"
                    aria-labelledby="heading1"
                    data-parent="#accordionFaq">
                    <div className="card__body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card__header" id="heading2">
                    <h5 className="mb-0 title">
                      <button
                        className="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse2"
                        aria-expanded="true"
                        aria-controls="collapse2">
                        First and foremost, you never want to go?
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapse2"
                    className="collapse show"
                    aria-labelledby="heading2"
                    data-parent="#accordionFaq">
                    <div className="card__body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card__header" id="heading3">
                    <h5 className="mb-0 title">
                      <button
                        className="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse3"
                        aria-expanded="false"
                        aria-controls="collapse3">
                        First and foremost, you never want to go?
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapse3"
                    className="collapse"
                    aria-labelledby="heading3"
                    data-parent="#accordionFaq">
                    <div className="card__body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card__header" id="heading4">
                    <h5 className="mb-0 title">
                      <button
                        className="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse4"
                        aria-expanded="false"
                        aria-controls="collapse4">
                        First and foremost, you never want to go?
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapse4"
                    className="collapse"
                    aria-labelledby="heading4"
                    data-parent="#accordionFaq">
                    <div className="card__body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco.
                      </p>
                    </div>
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

export default Faq;
