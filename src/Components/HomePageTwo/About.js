import React from "react";

const About = () => {
  return (
    <>
      <section
        className="about__area about__area--2 grey-bg bg_img pt-95 pb-100"
        data-background="assets/images/bg/about-bg-2.png">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="section__heading mb-30">
                <h4 className="section__heading--title-small">
                  <span className="mr-10">\\</span>about us
                </h4>
                <h2 className="section__heading--title">
                  We've Been Thriving In <br />
                  38 Years<span>.</span>
                </h2>
                <div className="section__heading--content mt-20">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris.
                  </p>
                </div>
              </div>
              <div className="about__box about__box--2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  quo dicta ab esse facilis, veritatis alias id tenetur!
                  Repudiandae modi dolorum reprehenderit nostrum, quidem
                  expedita iusto? Neque quibusdam voluptas eius et, nam laborum
                  repudiandae, dolorem officiis ab quas odio, tenetur eos quae.
                  Ullam nesciunt, eveniet temporibus earum perspiciatis dicta id
                  voluptas fugit sequi quia quidem, quae dolores blanditiis
                  debitis tenetur qui distinctio, reprehenderit amet! Aut
                  tempore iusto laboriosam impedit, atque quisquam veniam optio
                  sed tenetur.
                </p>
                <a href="about.html" className="site-btn mt-35">
                  Learn More <span>+</span>
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 text-right">
              <div
                className="about__bg about__bg--2"
                data-tilt
                data-tilt-perspective="3000">
                <img src="assets/images/others/about-authore-1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
