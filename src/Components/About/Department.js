import React from "react";

const Department = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="department__wrap department__wrap--2">
              <div className="row no-gutters mt-none-30">
                <div className="col-xl-6 mt-30">
                  <div className="department__box department__box--border pr-50">
                    <div className="department__box--icon">
                      <img src="assets/images/icons/department-1.png" alt="" />
                    </div>
                    <div className="department__box--content">
                      <h4 className="title mb-15">
                        We have an it departments.
                      </h4>
                      <p>
                        Labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitat ion ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 mt-30">
                  <div className="department__box pl-50">
                    <div className="department__box--icon">
                      <img src="assets/images/icons/department-2.png" alt="" />
                    </div>
                    <div className="department__box--content">
                      <h4 className="title mb-15">
                        We Don't have an it departments.
                      </h4>
                      <p>
                        Labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitat ion ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Department;
