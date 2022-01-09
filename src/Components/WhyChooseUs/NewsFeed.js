import React from "react";

const NewsFeed = () => {
  return (
    <>
      <section className="news-feed-area pt-95">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="newsfeedwrap newsfeedwrap--3">
                <div className="section__heading mb-40">
                  <h4 className="section__heading--title-small">
                    {" "}
                    <span className="mr-10">\\</span>news Feeds
                  </h4>
                  <h2 className="section__heading--title">
                    Get Every Single <br />
                    Update Here<span>.</span>
                  </h2>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="news__items mt-none-30">
                      <div className="news__item mt-30">
                        <div className="thumb">
                          <img
                            src="assets/images/news/news-small-1.jpeg"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <ul className="meta">
                            <li>
                              <a href="#0">
                                <i className="fal fa-calendar-alt"></i> 24th
                                June 2020
                              </a>
                            </li>
                            <li>
                              <a href="#0">
                                <i className="fal fa-user"></i> By Admin
                              </a>
                            </li>
                          </ul>
                          <h4 className="title">
                            <a href="news-details.html">
                              We are specialists in both economics and
                              information technologies.
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className="news__item mt-30">
                        <div className="thumb">
                          <img
                            src="assets/images/news/news-small-2.jpeg"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <ul className="meta">
                            <li>
                              <a href="#0">
                                <i className="fal fa-calendar-alt"></i> 24th
                                June 2020
                              </a>
                            </li>
                            <li>
                              <a href="#0">
                                <i className="fal fa-user"></i> By Admin
                              </a>
                            </li>
                          </ul>
                          <h4 className="title">
                            <a href="news-details.html">
                              We are specialists in both economics and
                              information technologies.
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="news__item news__item--transparent mt-30">
                <div className="thumb" data-overlay="dark" data-opacity="6">
                  <img src="assets/images/news/news-big-2.jpeg" alt="" />
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <a href="#0">
                        <i className="fal fa-calendar-alt"></i> 24th June 2020
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fal fa-user"></i> By Admin
                      </a>
                    </li>
                  </ul>
                  <h4 className="title">
                    <a href="news-details.html">
                      We are specialists in both economics and information
                      technologies.
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsFeed;
