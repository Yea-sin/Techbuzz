import React from "react";

const Timeline = () => {
  return (
    <>
      <section
        className="timeline-area pt-95 pb-100 bg_img"
        data-background="assets/images/pattern/timeline-pattern.png">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 text-center">
              <div className="section__heading white mb-60">
                <h4 className="section__heading--title-small">
                  <span className="mr-10">\\</span>Our Journey
                  <span className="ml-10">\\</span>
                </h4>
                <h1 className="section__heading--transparent">Timeline</h1>
                <h2 className="section__heading--title">
                  Having Someone With a Deep &amp; Broad Understanding
                  <span>.</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="timeline">
                <span className="shape"></span>
                <span className="shape shape--2"></span>
                <div className="timeline__box">
                  <span className="year">1990</span>
                  <div className="timeline__box--inner">
                    <div className="thumb">
                      <img src="assets/images/others/timeline-1.jpeg" alt="" />
                    </div>
                    <div className="content">
                      <h4 className="title">Founded Company</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore.
                      </p>
                      <span className="number">01</span>
                    </div>
                  </div>
                </div>
                <div className="timeline__box">
                  <span className="year">2001</span>
                  <div className="timeline__box--inner">
                    <div className="thumb">
                      <img src="assets/images/others/timeline-2.jpeg" alt="" />
                    </div>
                    <div className="content">
                      <h4 className="title">Design Award Winning</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore.
                      </p>
                      <span className="number">02</span>
                    </div>
                  </div>
                </div>
                <div className="timeline__box">
                  <span className="year">2008</span>
                  <div className="timeline__box--inner">
                    <div className="thumb">
                      <img src="assets/images/others/timeline-3.jpeg" alt="" />
                    </div>
                    <div className="content">
                      <h4 className="title">200+ Emploee Join</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore.
                      </p>
                      <span className="number">03</span>
                    </div>
                  </div>
                </div>
                <div className="timeline__box">
                  <span className="year">2020</span>
                  <div className="timeline__box--inner">
                    <div className="thumb">
                      <img src="assets/images/others/timeline-4.jpeg" alt="" />
                    </div>
                    <div className="content">
                      <h4 className="title">100+ Project Done</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore.
                      </p>
                      <span className="number">04</span>
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

export default Timeline;
