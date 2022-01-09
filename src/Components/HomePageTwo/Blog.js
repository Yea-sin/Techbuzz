import React from "react";

const Blog = () => {
  return (
    <>
      <section className="blog__area pt-95 pb-100">
        <div className="container">
          <div className="row mb-60">
            <div className="col-xl-6 col-lg-6 col-md-7">
              <div className="section__heading">
                <h4 className="section__heading--title-small">
                  <span className="mr-10">\\</span> blog
                </h4>
                <h2 className="section__heading--title">
                  News Feeds<span>.</span>
                </h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-5 text-right">
              <a href="#0" className="site-btn mt-10">
                View Updates <span>+</span>
              </a>
            </div>
          </div>
          <div className="row mt-none-30">
            <div className="col-xl-4 col-lg-6 col-md-12 mt-30">
              <article className="blog__box">
                <div className="thumb">
                  <img src="assets/images/news/news-standard-1.jpeg" alt="" />
                </div>
                <div className="content">
                  <span className="cat">\\ it solutions</span>
                  <h4 className="title">
                    <a href="news-details.html">
                      Create amazing static asset s for web applications
                      <span>.</span>
                    </a>
                  </h4>
                  <p>
                    Here's where I wish I could say (without caveats): “Don't
                    worry, Django has your back!” But unfortunately.
                  </p>
                  <div className="meta">
                    <div className="authore">
                      <div className="authore__thumb">
                        <img
                          src="assets/images/news/news-authore-1.png"
                          alt=""
                        />
                      </div>
                      <div className="authore__content">
                        <h5>By Admin</h5>
                      </div>
                    </div>
                    <div className="date">
                      <i className="fal fa-calendar-alt"></i> 24/05/2020
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 mt-30">
              <article className="blog__box">
                <div className="thumb">
                  <img src="assets/images/news/news-standard-2.jpeg" alt="" />
                </div>
                <div className="content">
                  <span className="cat">\\ it solutions</span>
                  <h4 className="title">
                    <a href="news-details.html">
                      Today, we're focusing on what happens after the
                      <span>.</span>
                    </a>
                  </h4>
                  <p>
                    Here's where I wish I could say (without caveats): “Don't
                    worry, Django has your back!” But unfortunately.
                  </p>
                  <div className="meta">
                    <div className="authore">
                      <div className="authore__thumb">
                        <img
                          src="assets/images/news/news-authore-1.png"
                          alt=""
                        />
                      </div>
                      <div className="authore__content">
                        <h5>By Admin</h5>
                      </div>
                    </div>
                    <div className="date">
                      <i className="fal fa-calendar-alt"></i> 24/05/2020
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 mt-30">
              <article className="blog__box">
                <div className="thumb">
                  <img src="assets/images/news/news-standard-3.jpeg" alt="" />
                </div>
                <div className="content">
                  <span className="cat">\\ it solutions</span>
                  <h4 className="title">
                    <a href="news-details.html">
                      Style hotfix or beautiful graphic you just finished
                      <span>.</span>
                    </a>
                  </h4>
                  <p>
                    Here's where I wish I could say (without caveats): “Don't
                    worry, Django has your back!” But unfortunately.
                  </p>
                  <div className="meta">
                    <div className="authore">
                      <div className="authore__thumb">
                        <img
                          src="assets/images/news/news-authore-1.png"
                          alt=""
                        />
                      </div>
                      <div className="authore__content">
                        <h5>By Admin</h5>
                      </div>
                    </div>
                    <div className="date">
                      <i className="fal fa-calendar-alt"></i> 24/05/2020
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
