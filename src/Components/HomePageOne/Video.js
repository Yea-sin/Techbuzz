import React from "react";

const Video = () => {
  return (
    <>
      <section
        className="video__area bg_img pt-100 pb-130"
        data-background="assets/images/bg/video-bg.jpeg">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-8">
              <div className="video-content-wrap">
                <div className="section__heading mb-35">
                  <h4 className="section__heading--title-small">
                    <span className="mr-10">||</span>Intro video
                  </h4>
                  <h2 className="section__heading--title">
                    Just Make An Awesome <br />
                    Tour Here<span>.</span>
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
                <div className="row mt-none-20">
                  <div className="col-xl-6 mt-20">
                    <ul className="service__box--lists">
                      <li>
                        <span className="icon">
                          <i className="fal fa-check"></i>
                        </span>{" "}
                        Easy To Edit
                      </li>
                      <li>
                        <span className="icon">
                          <i className="fal fa-check"></i>
                        </span>{" "}
                        24/ Online Support
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-6 mt-20">
                    <ul className="service__box--lists">
                      <li>
                        <span className="icon">
                          <i className="fal fa-check"></i>
                        </span>{" "}
                        Easy To Edit
                      </li>
                      <li>
                        <span className="icon">
                          <i className="fal fa-check"></i>
                        </span>{" "}
                        24/ Online Support
                      </li>
                    </ul>
                  </div>
                </div>
                <a href="contact.html" className="site-btn">
                  Get Started Now <span>+ </span>
                </a>
              </div>
            </div>
            <div className="col-xl-2 offset-xl-2 offset-lg-1 col-lg-3 align-self-center video-btn-wrap">
              <a
                href="||www.youtube.com/embed/4xe72U7mXNg?rel=0&amp;controls=0&amp;showinfo=0"
                data-rel="lightcase:myCollection"
                data-animation="fadeInLeft"
                data-delay=".1s"
                className="video-link">
                <div className="video-play-wrap">
                  <div className="video-mark">
                    <div className="wave-pulse wave-pulse-1"></div>
                    <div className="wave-pulse wave-pulse-2"></div>
                  </div>
                  <div className="video-play">
                    <i className="fa fa-play"></i>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;
