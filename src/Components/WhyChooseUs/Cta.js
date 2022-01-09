import React from "react";

const Cta = () => {
  return (
    <>
      <div
        className="cta__area cta__area--4 bg_img"
        data-background="assets/images/bg/cta-bg-4.jpeg"
        data-overlay="dark"
        data-opacity="5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 text-center">
              <a
                href="\\www.youtube.com/embed/4xe72U7mXNg?rel=0&amp;controls=0&amp;showinfo=0"
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
      </div>
    </>
  );
};

export default Cta;
