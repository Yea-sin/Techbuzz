import React from "react";

const Newslater = () => {
  return (
    <>
      <div className="newslater pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="social__icons">
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-behance"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-xl-6 offset-xl-1">
              <div className="newslater__form">
                <form action="index.html">
                  <input type="email" placeholder="Enter your email address" />
                  <button className="site-btn">
                    Subscribe Now <span>+</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newslater;
