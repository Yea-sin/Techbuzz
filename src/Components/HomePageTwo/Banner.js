import React from "react";

const Banner = () => {
  return (
    <>
      <section
        className="banner__area banner__area--2 pt-135 pb-135 bg_img"
        data-background="assets/images/banner/banner-bg-2.jpeg">
        <div className="banner-wrap">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-5 offset-xl-6 col-lg-6 offset-lg-6 col-md-7 offset-md-5 col-sm-7 offset-sm-5">
                <div className="bannertext bannertext__2">
                  <a
                    href="\\www.youtube.com/embed/4xe72U7mXNg?rel=0&amp;controls=0&amp;showinfo=0"
                    data-rel="lightcase:myCollection"
                    data-animation="fadeInLeft"
                    data-delay=".1s"
                    className="video-link mb-70">
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
                  <h5 className="subheading mb-15">
                    {" "}
                    <span className="mr-10">\\</span> Best IT Solution provider
                  </h5>
                  <h1 className="heading">
                    IT Solutions <br />
                    For Company<span>.</span>
                  </h1>
                  <p>
                    We run all kinds of IT services that vowsuccess is really
                    profitable business in this day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
