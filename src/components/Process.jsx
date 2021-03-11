import React from "react";

const Process = () => {
  return (
    <section
      className="our-process container"
      id="our-process"
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <div className="heading">
        <h2 className="uppercase lg-text">
          Our <span className="text-green">process</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          necessitatibus officia eveniet fuga ducimus dolorum.
        </p>
      </div>
      <div className="our-process-rings">
        <div className="ring">
          <div className="ring-icon">
            <i className="fas fa-mobile">
              <span>1</span>
            </i>
          </div>
          <div className="ring-info">
            <h4 className="uppercase">request call</h4>
            <p>
              Lorem, ipsum dolor <br /> sit amet consectetu.
            </p>
          </div>
        </div>
        <div className="ring">
          <div className="ring-icon">
            <i className="far fa-comments">
              <span>2</span>
            </i>
          </div>
          <div className="ring-info">
            <h4 className="uppercase">consultation</h4>
            <p>
              Lorem, ipsum dolor <br /> sit amet consectetu
            </p>
          </div>
        </div>
        <div className="ring">
          <div className="ring-icon">
            <i className="fas fa-boxes">
              <span>3</span>
            </i>
          </div>
          <div className="ring-info">
            <h4 className="uppercase">planning</h4>
            <p>
              Lorem, ipsum dolor <br /> sit amet consectet
            </p>
          </div>
        </div>
        <div className="ring">
          <div className="ring-icon">
            <i className="fas fa-cog">
              <span>4</span>
            </i>
          </div>
          <div className="ring-info">
            <h4 className="uppercase">work process</h4>
            <p>
              Lorem, ipsum dolor <br /> sit amet consectet
            </p>
          </div>
        </div>
        <div className="ring">
          <div className="ring-icon">
            <i className="far fa-pencil-alt">
              <span>5</span>
            </i>
          </div>
          <div className="ring-info">
            <h4 className="uppercase">correcting</h4>
            <p>
              Lorem, ipsum dolor <br /> sit amet consectet
            </p>
          </div>
        </div>
        <div className="ring">
          <div className="ring-icon">
            <i className="far fa-check-circle">
              <span>6</span>
            </i>
          </div>
          <div className="ring-info">
            <h4 className="uppercase">deliver</h4>
            <p>
              Lorem, ipsum dolor <br /> sit amet consectet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
