import React from "react";

const ContactForm = () => {
  return (
    <>
      <div className="contact__area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="contact__wrap pt-95 pb-95">
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    <div className="contact__form">
                      <form
                        id="contacts-us-form"
                        action="mail.php"
                        method="POST">
                        <div className="row mt-none-30">
                          <div className="col-xl-6 mt-30">
                            <div className="form__group">
                              <label htmlFor="name">
                                <i className="fal fa-user"></i>
                              </label>
                              <input
                                name="name"
                                type="text"
                                id="name"
                                placeholder="Enter your full name"
                              />
                            </div>
                          </div>
                          <div className="col-xl-6 mt-30">
                            <div className="form__group">
                              <label htmlFor="email">
                                <i className="fal fa-envelope"></i>
                              </label>
                              <input
                                name="email"
                                type="email"
                                id="email"
                                placeholder="Enter email address"
                              />
                            </div>
                          </div>
                          <div className="col-xl-6 mt-30">
                            <div className="form__group">
                              <label htmlFor="tel">
                                <i className="fal fa-phone"></i>
                              </label>
                              <input
                                name="phone"
                                type="tel"
                                id="tel"
                                placeholder="Add phone number"
                              />
                            </div>
                          </div>
                          <div className="col-xl-6 mt-30">
                            <div className="form__group">
                              <label htmlFor="subject">
                                <i className="fal fa-book"></i>
                              </label>
                              <input
                                name="subject"
                                type="text"
                                id="subject"
                                placeholder="Enter your subject"
                              />
                            </div>
                          </div>
                          <div className="col-xl-12 mt-30">
                            <div className="form__group">
                              <label htmlFor="message">
                                <i className="fal fa-pen"></i>
                              </label>
                              <textarea
                                name="message"
                                id="message"
                                placeholder="Enter messages"></textarea>
                            </div>
                          </div>
                          <div className="col-xl-12 mt-30 text-center">
                            <button className="site-btn" type="submit">
                              Get Free Consultancy
                            </button>
                            <p
                              className="ajax-response mt-15"
                              style={{ color: "#fff" }}></p>
                          </div>
                        </div>
                      </form>
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

export default ContactForm;
