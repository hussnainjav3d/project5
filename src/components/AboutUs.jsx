import React from "react";

import about from "../img/about-us.jpg";
const AboutUs = () => {
  return (
    <section
      data-aos="fade-left"
      data-aos-duration="1500"
      id="about-us"
      className="container about-us"
    >
      <div className="heading">
        <h2 className="uppercase lg-text">
          About <span className="text-green ">us</span>
        </h2>
      </div>
      <div className="split">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            natus molestiae maxime ut enim praesentium at impedit accusantium!
            Veniam, quia.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            optio quidem porro perspiciatis harum nobis cupiditate voluptas
            commodi totam nesciunt. Fuga eum laudantium facere. Quaerat eligendi
            excepturi asperiores quibusdam. Obcaecati.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            possimus aspernatur maiores voluptate iure quis architecto quam
            optio porro voluptas quae doloremque et asperiores excepturi quaerat
            eveniet, itaque molestiae natus?
          </p>
          <a href="#about-us" className="btn">
            Read more
          </a>
        </div>
        <div>
          <img src={about} alt="About Us" className="about-pic"></img>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
