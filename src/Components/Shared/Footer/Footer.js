import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        className="site-footer bg_img pt-100"
        data-background="assets/images/pattern/footer-pattern.png">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 text-center">
              <a href="index.html" className="site-logo mb-50">
                <img src="assets/images/logo/logo.png" alt="Logo" />
              </a>
            </div>
            <div className="col-xl-12">
              <div className="footer-top mt-50 mb-80">
                <div className="footer__info">
                  <div className="footer__info--item d-flex align-items-center">
                    <div className="icon mr-20">
                      <img
                        src="assets/images/icons/footer-info-icon-1.png"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <h4 className="title">Phone Number</h4>
                      <a href="tel:98787676576577">+987 876 765 76 577</a>
                    </div>
                  </div>
                  <div className="footer__info--item d-flex align-items-center">
                    <div className="icon mr-20">
                      <img
                        src="assets/images/icons/footer-info-icon-2.png"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <h4 className="title">Email Address</h4>
                      <a href="mailto:info@webmail.com">info@webmail.com</a>
                    </div>
                  </div>
                  <div className="footer__info--item d-flex align-items-center">
                    <div className="icon mr-20">
                      <img
                        src="assets/images/icons/footer-info-icon-3.png"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <h4 className="title">Office Address</h4>
                      <span>14/A, Miranda City, NYC</span>
                    </div>
                  </div>
                </div>
                <button id="scroll-top" className="site-btn transparent">
                  <i className="fal fa-long-arrow-up"></i>{" "}
                  <span>Back To Top</span>{" "}
                  <i className="fal fa-long-arrow-up"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-none-30">
            <div className="col-xl-4 col-lg-6 col-md-12 mt-30">
              <div className="footer__widget">
                <h4 className="title mb-30">Services</h4>
                <div className="row no-gutters">
                  <div className="col">
                    <ul>
                      <li>
                        <a href="service-details.html">IT Software</a>
                      </li>
                      <li>
                        <a href="service-details.html">IT Support</a>
                      </li>
                      <li>
                        <a href="service-details.html">IT Platforms</a>
                      </li>
                      <li>
                        <a href="service-details.html">Cloud Computing</a>
                      </li>
                      <li>
                        <a href="service-details.html">Cyber Security</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <ul>
                      <li>
                        <a href="service-details.html">IT Software</a>
                      </li>
                      <li>
                        <a href="service-details.html">IT Support</a>
                      </li>
                      <li>
                        <a href="service-details.html">IT Platforms</a>
                      </li>
                      <li>
                        <a href="service-details.html">Cloud Computing</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-6 col-sm-6 col-6 mt-30">
              <div className="footer__widget">
                <h4 className="title mb-30">More Link</h4>
                <ul>
                  <li>
                    <a href="#0">Pick up locations</a>
                  </li>
                  <li>
                    <a href="#0">Terms of Payment</a>
                  </li>
                  <li>
                    <a href="#0">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#0">Where to Find Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-6 col-sm-6 col-6 mt-30">
              <div className="footer__widget">
                <h4 className="title mb-30">Support</h4>
                <ul>
                  <li>
                    <a href="#0">Forum Support</a>
                  </li>
                  <li>
                    <a href="#0">Help & FAQ</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                  <li>
                    <a href="services.html">Pricing and plans</a>
                  </li>
                  <li>
                    <a href="#0">Cookies Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 mt-30">
              <div className="footer__widget">
                <h4 className="title mb-30">News Feeds</h4>
                <div className="newsfeed__wrap">
                  <div className="newsfeed__item mb-20">
                    <div className="thumb">
                      <img src="assets/images/news/news-small-3.jpeg" alt="" />
                    </div>
                    <div className="content">
                      <ul className="meta">
                        <li>
                          <a href="#0">
                            <i className="fal fa-calendar-alt"></i> 24th June
                            2020
                          </a>
                        </li>
                      </ul>
                      <h4 className="title">
                        <a href="news-details.html">
                          We are specialists in both economics and information
                        </a>
                      </h4>
                    </div>
                  </div>
                  <div className="newsfeed__item">
                    <div className="thumb">
                      <img src="assets/images/news/news-small-4.jpeg" alt="" />
                    </div>
                    <div className="content">
                      <ul className="meta">
                        <li>
                          <a href="#0">
                            <i className="fal fa-calendar-alt"></i> 24th June
                            2020
                          </a>
                        </li>
                      </ul>
                      <h4 className="title">
                        <a href="news-details.html">
                          We are specialists in both economics and information
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="copyright-text mt-60">
                <div className="row">
                  <div className="col-xl-12 text-center">
                    <p>
                      Copyright By@Example - <span>2020</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
