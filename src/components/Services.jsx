import React from "react";

const Services = () => {
  return (
    <section
      className="container our-services"
      id="our-services"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="heading">
        <h2 className="uppercase lg-text">
          Our <span className="text-green">services</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          necessitatibus officia eveniet fuga ducimus dolorum.
        </p>
      </div>
      <div className="service-card-list">
        <div className="service-card">
          <i className="fas fa-star service-icons"></i>
          <div className="service-text">
            <h3>WEB DESIGN</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#our-services">Read More</a>
          </div>
        </div>
        <div className="service-card">
          <i className="fas fa-star service-icons"></i>
          <div className="service-text">
            <h3>GRAPHICS DESIGN</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#our-services">Read More</a>
          </div>
        </div>
        <div className="service-card">
          <i className="fas fa-star service-icons"></i>
          <div className="service-text">
            <h3>BRANDING</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#our-services">Read More</a>
          </div>
        </div>
        <div className="service-card">
          <i className="fas fa-star service-icons"></i>
          <div className="service-text">
            <h3>MARKTING</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#our-services">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
