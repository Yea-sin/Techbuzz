import React from "react";

const Breadcrumb = () => {
  return (
    <>
      <section
        class="breadcrumb pt-150 pb-150 bg_img"
        data-background="assets/images/bg/breadcrumb-bg-1.jpeg"
        data-overlay="dark"
        data-opacity="5">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="breadcrumb__wrap">
                <h2 class="title">News Details</h2>
                <div class="breadcrumb__nav">
                  <ul>
                    <li>
                      <span>\\</span>
                    </li>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>|</li>
                    <li>blog Details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
