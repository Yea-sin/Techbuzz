import React from "react";

const Loader = () => {
  return (
    <>
      <div id="preloader">
        <div id="ctn-preloader" className="ctn-preloader">
          <div className="animation-preloader">
            <div className="spinner"></div>
            <div className="txt-loading">
              <span data-text-preloader="T" className="letters-loading">
                T
              </span>
              <span data-text-preloader="E" className="letters-loading">
                E
              </span>
              <span data-text-preloader="C" className="letters-loading">
                C
              </span>
              <span data-text-preloader="H" className="letters-loading">
                H
              </span>
              <span data-text-preloader="B" className="letters-loading">
                B
              </span>
              <span data-text-preloader="U" className="letters-loading">
                U
              </span>
              <span data-text-preloader="Z" className="letters-loading">
                Z
              </span>
              <span data-text-preloader="Z" className="letters-loading">
                Z
              </span>
            </div>
          </div>
          <div className="loader">
            <div className="row">
              <div className="col-3 loader-section section-left">
                <div className="bg"></div>
              </div>
              <div className="col-3 loader-section section-left">
                <div className="bg"></div>
              </div>
              <div className="col-3 loader-section section-right">
                <div className="bg"></div>
              </div>
              <div className="col-3 loader-section section-right">
                <div className="bg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
