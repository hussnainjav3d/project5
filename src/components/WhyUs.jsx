import React from "react";

const WhyUs = () => {
  return (
    <section
      data-aos="zoom-in-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      id="why-us"
      className="container why-us"
    >
      <div className="heading">
        <h2 className="uppercase lg-text">
          Our <span className="text-green ">advantages</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eum
          similique repellendus, velit incidunt eaque ipsam dolore cupiditate
          omnis culpa?
        </p>
      </div>
      <div className="why-cards">
        <div className="cards">
          <div className="card-icon">
            <i className="far fa-lightbulb"></i>
          </div>
          <div className="crad-info">
            <h4 className="uppercase">Innovation</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, ea.
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="card-icon">
            <i className="far fa-thumbs-up"></i>
          </div>
          <div className="crad-info">
            <h4 className="uppercase">quality</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, ea.
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="card-icon">
            <i className="fas fa-business-time"></i>
          </div>
          <div className="crad-info">
            <h4 className="uppercase">experience</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, ea.
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="card-icon">
            <i className="fas fa-users"></i>
          </div>
          <div className="crad-info">
            <h4 className="uppercase">happy clients</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, ea.
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="card-icon">
            <i className="far fa-comments"></i>
          </div>
          <div className="card-info">
            <h4 className="uppercase">support</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, ea.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
