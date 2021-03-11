import React from "react";

const Skills = () => {
  return (
    <section className="our-skills container" id="our-skills">
      <div className="heading">
        <h2
          data-aos="fade-left"
          data-aos-duration="1500"
          className="uppercase lg-text"
        >
          our <span className="text-green">skills </span>
        </h2>
        <p data-aos="fade-right" data-aos-duration="1500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          necessitatibus officia eveniet fuga ducimus dolorum.
        </p>
      </div>
      <div className="skill-progress">
        <div className="skill-circle">
          <div className="percentage">
            <svg height="180" width="180">
              <circle cx="90" cy="90" r="80" className="track" fill="none" />
              <circle cx="90" cy="90" r="80" className="progress" fill="none" />
            </svg>
            <h2 className="value-percentage">85%</h2>
          </div>
          <span data-aos="zoom-in" data-aos-duration="1500">
            Web Development
          </span>
        </div>
        <div className="skill-circle">
          <div className="percentage">
            <svg height="180" width="180">
              <circle cx="90" cy="90" r="80" className="track" fill="none" />
              <circle cx="90" cy="90" r="80" className="progress" fill="none" />
            </svg>
            <h2 className="value-percentage">60%</h2>
          </div>
          <span data-aos="zoom-in" data-aos-duration="1500">
            SEO & ADS
          </span>
        </div>
        <div className="skill-circle">
          <div className="percentage">
            <svg height="180" width="180">
              <circle cx="90" cy="90" r="80" className="track" fill="none" />
              <circle cx="90" cy="90" r="80" className="progress" fill="none" />
            </svg>
            <h2 className="value-percentage">55%</h2>
          </div>
          <span data-aos="zoom-in" data-aos-duration="1500">
            Branding
          </span>
        </div>
        <div className="skill-circle">
          <div className="percentage">
            <svg height="180" width="180">
              <circle cx="90" cy="90" r="80" className="track" fill="none" />
              <circle cx="90" cy="90" r="80" className="progress" fill="none" />
            </svg>
            <h2 className="value-percentage">75%</h2>
          </div>
          <span data-aos="zoom-in" data-aos-duration="1500">
            Web design
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
