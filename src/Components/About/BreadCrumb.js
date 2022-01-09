import React from "react";

const BreadCrumb = () => {
  return (
    <div>
      <section
        className="breadcrumb pt-150 pb-150 bg_img"
        data-background="assets/images/bg/breadcrumb-bg-1.jpeg"
        data-overlay="dark"
        data-opacity="5">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb__wrap">
                <h2 className="title">About Us.</h2>
                <div className="breadcrumb__nav">
                  <ul>
                    <li>
                      <span>\\</span>
                    </li>
                    <li>
                      <a href="/home">Home</a>
                    </li>
                    <li>|</li>
                    <li>about us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BreadCrumb;
