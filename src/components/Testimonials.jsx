import React from "react";
import profile from "../img/johnsmilga.png";
const Testimonials = () => {
  return (
    <section
      data-aos="zoom-in"
      data-aos-duration="1500"
      className="people-about-us container"
      id="people-about-us"
    >
      <div className="heading">
        <h2 className="uppercase lg-text">
          people <span className="text-green">about us</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          necessitatibus officia eveniet fuga ducimus dolorum.
        </p>
      </div>
      <div className="testimonial-grid">
        <div className="testimonial">
          <img
            src={profile}
            alt="profile-pic"
            className="testimonial-pic"
          ></img>
          <div className="testimonial-conten">
            <h3>John Smilga</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              culpa dolores aut esse labore fugit ipsum vel voluptates excepturi
              ratione.
            </p>
          </div>
        </div>
        <div className="testimonial">
          <img
            src={profile}
            alt="profile-pic"
            className="testimonial-pic"
          ></img>
          <div className="testimonial-conten">
            <h3>John Smilga</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              culpa dolores aut esse labore fugit ipsum vel voluptates excepturi
              ratione.
            </p>
          </div>
        </div>
        <div className="testimonial">
          <img
            src={profile}
            alt="profile-pic"
            className="testimonial-pic"
          ></img>
          <div className="testimonial-conten">
            <h3>John Smilga</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              culpa dolores aut esse labore fugit ipsum vel voluptates excepturi
              ratione.
            </p>
          </div>
        </div>
        <div className="testimonial">
          <img
            src={profile}
            alt="profile-pic"
            className="testimonial-pic"
          ></img>
          <div className="testimonial-conten">
            <h3>John Smilga</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              culpa dolores aut esse labore fugit ipsum vel voluptates excepturi
              ratione.
            </p>
          </div>
        </div>
      </div>
      <div className="circle-list">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </section>
  );
};

export default Testimonials;
