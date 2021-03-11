import React from "react";
import map from "../img/map.png";
const ContactUs = () => {
  return (
    <section className="our-contact container" id="our-contact">
      <div
        className="heading"
        data-aos="zoom-in-down"
        data-aos-easing="ease-in"
        data-aos-duration="800"
      >
        <h2 className="uppercase lg-text">
          our <span className="text-green">Contact </span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          necessitatibus officia eveniet fuga ducimus dolorum.
        </p>
      </div>
      <div
        className="contact-list"
        data-aos="fade-right"
        data-aos-easing="ease-in"
        data-aos-duration="1100"
      >
        <i className="fas fa-map-marker-alt location">
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae, beatae.{" "}
          </span>
        </i>
        <i className="fas fa-phone">
          <span>+92(306)-9200 201</span>
        </i>
        <i className="fas fa-phone">
          <span>+92(349)-4300 131</span>
        </i>
        <i className="fas fa-envelope email-icon">
          <span>hussnain.jav3d@gmail.com</span>
        </i>
      </div>
      <div className="contact-map">
        <img src={map} alt="" />
      </div>
    </section>
  );
};

export default ContactUs;
