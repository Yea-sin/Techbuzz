import React from "react";

const Banner = () => {
  return (
    <>
      <section
        className="banner__area pt-135 pb-135 bg_img"
        data-background="assets/images/bg/banner-bg-1.jpg">
        <div className="banner-wrap">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-7">
                <div className="bannertext">
                  <h5 className="subheading mb-10">
                    <span className="mr-10">||</span>Best IT Solution provider
                  </h5>
                  <h1 className="heading">
                    Advanced <br />
                    Innovative <br />
                    IT Solutions<span>.</span>
                  </h1>
                  <p>We run all kinds of IT services that vowsuccess</p>
                  <div className="buttons mt-35">
                    <a href="contact.html" className="site-btn">
                      Get In Touch <span>+</span>
                    </a>
                    <a href="about.html" className="site-btn transparent">
                      Learn More <span>+</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 offset-xl-2 col-md-5 mmt-auto">
                <div className="banner__rightbox">
                  <div className="banner__rightbox--item">
                    <div className="circle">
                      <input
                        type="text"
                        className="knob"
                        value="0"
                        data-rel="65"
                        data-linecap="round"
                        data-width="75"
                        data-height="75"
                        data-bgcolor="#DEF5FF"
                        data-fgcolor="#086AD8"
                        data-thickness=".10"
                        data-readonly="true"
                        disabled
                      />
                    </div>
                    <div className="content">
                      <h3 className="title">Business Growth</h3>
                      <p>Level is high</p>
                    </div>
                  </div>
                  <div className="banner__rightbox--item mt-110 ml-30">
                    <div className="circle">
                      <input
                        type="text"
                        className="knob"
                        value="0"
                        data-rel="53"
                        data-linecap="round"
                        data-width="75"
                        data-height="75"
                        data-bgcolor="#DEF5FF"
                        data-fgcolor="#086AD8"
                        data-thickness=".10"
                        data-readonly="true"
                        disabled
                      />
                    </div>
                    <div className="content">
                      <h3 className="title">Provide Fund</h3>
                      <p>Don't worry about it</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-img">
          <img src="assets/images/banner/banner-1.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default Banner;
