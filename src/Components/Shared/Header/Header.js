import React from "react";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6 col-lg-7 col-md-12">
                <div className="header__top--info">
                  <ul>
                    <li>
                      <a href="mailto:info@webmail.com">
                        <span className="icon">
                          <i className="fal fa-envelope"></i>
                        </span>{" "}
                        info@webmail.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:9878768648765">
                        <span className="icon">
                          <i className="fal fa-phone"></i>
                        </span>{" "}
                        +987 876 86 48 765
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5 col-md-12">
                <div className="header__top--info--right">
                  <div className="lang">
                    <div className="lang__icon">
                      <a href="#0" className="lang__btn">
                        English <i className="fal fa-angle-down"></i>
                      </a>
                      <ul className="lang__list">
                        <li>
                          <a href="#0">USA</a>
                        </li>
                        <li>
                          <a href="#0">UK</a>
                        </li>
                        <li>
                          <a href="#0">CA</a>
                        </li>
                        <li>
                          <a href="#0">AU</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a href="/careers" className="job-btn">
                    <i className="fal fa-briefcase"></i> Get Job Feeds
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navarea">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-2 col-lg-2 col-md-4 my-auto">
                <div className="header__logo">
                  <a href="/homeOne">
                    <img src="assets/images/logo/logo.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div className="header__menu">
                  <nav id="mobile-menu">
                    <ul>
                      <li>
                        <a href="/homeOne">
                          Home <span>+</span>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="/homeOne">Homepage 01</a>
                          </li>
                          <li>
                            <a href="/HomeTwo">Homepage 02</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/about">About</a>
                      </li>
                      <li>
                        <a href="/services">
                          Services <span>+</span>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="\services">Services</a>
                          </li>
                          <li>
                            <a href="\serviceDetails">Service Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#0">
                          Pages <span>+</span>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="/faq">Faq</a>
                          </li>
                          <li>
                            <a href="/careers">Careers</a>
                          </li>
                          <li>
                            <a href="/team">Team</a>
                          </li>
                          <li>
                            <a href="/teamDetails">Team Details</a>
                          </li>
                          <li>
                            <a href="/chooseUs">Why Choose</a>
                          </li>
                          <li>
                            <a href="/portfolio">Portfolio</a>
                          </li>
                          <li>
                            <a href="/portfolioDetails">Portfolio Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/news">News</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="/news">News</a>
                          </li>
                          <li>
                            <a href="/newsDetails">News Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/contact">Contact</a>
                      </li>
                    </ul>
                  </nav>
                  <div className="mobile-menu"></div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-8 my-auto d-none d-xl-block d-lg-block">
                <div className="navarea__right">
                  <a href="/contact" className="site-btn">
                    Get A Quote <span>+</span>
                  </a>
                  <button className="search-trigger">
                    <i className="fal fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
