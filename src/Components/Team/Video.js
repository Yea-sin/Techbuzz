import React from "react";

const Video = () => {
  return (
    <>
      <section className="video__area video__area--2 grey-bg pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="video__bg pr-50">
                <img src="assets/images/bg/video-bg-2.jpeg" alt="" />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="video-content-wrap video-content-wrap-2">
                <a
                  href="\\www.youtube.com/embed/4xe72U7mXNg?rel=0&amp;controls=0&amp;showinfo=0"
                  data-rel="lightcase:myCollection"
                  data-animation="fadeInLeft"
                  data-delay=".1s"
                  className="video-link">
                  <div className="video-play-wrap">
                    <div className="video-play">
                      <i className="fa fa-play"></i>
                    </div>
                  </div>
                </a>
                <div className="section__heading mb-35">
                  <h4 className="section__heading--title-small">
                    <span className="mr-10">\\</span>Intro video
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;
