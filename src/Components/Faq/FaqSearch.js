import React from "react";

const FaqSearch = () => {
  return (
    <>
      <section
        className="faq-search-area pt-150 pb-155 bg_img"
        data-background="assets/images/pattern/faq-pattern.png">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 text-center">
              <div className="faq-search-wrap">
                <div className="faq-search mb-45">
                  <form action="index.html">
                    <input
                      type="search"
                      placeholder="Type your questions here"
                    />
                    <button type="submit">
                      <i className="fal fa-search"></i>
                    </button>
                  </form>
                </div>
                <h2 className="title">What are you looking for?</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incidid unt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqSearch;
