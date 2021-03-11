import React from "react";
import logo from "../img/logo.png";
const Footer = () => {
  return (
    <footer
      className="container footer"
      data-aos="zoom-in-left"
      data-aos-duration="1500"
    >
      <div className="footer-inner">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            numquam hic, qui reprehenderit illo quod suscipit atque, aut sit
            repudiandae sunt dicta! Officia, id dolore.
          </p>
          <p className="copyright">&copy;Hussnain Javed 2021</p>
        </div>
        <div className="services">
          <h2>Services</h2>
          <ul>
            <li>WEB DESIGN</li>
            <li>WEB DEVELOPMENT</li>
            <li>BRANDING</li>
            <li>SEO</li>
            <li>GRAPHICS DESIGN</li>
            <li>LOGO DESIGN</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h2>CONTACTS</h2>
          <div className="contact-list">
            <i className="fas fa-phone">
              <span>+92(306)-9200 201</span>
            </i>
            <i className="fas fa-phone">
              <span>+92(349)-4300 131</span>
            </i>
            <i className="fas fa-envelope">
              <span>hussnain.jav3d@gmail.com</span>
            </i>
          </div>
          <div className="social-media">
            <h2>FOLLOW US</h2>
            <ul className="social-links flex">
              <li>
                <a href="https://www.facebook.com" target="_blanck">
                  <i className="fab fa-facebook-f icons"></i>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" target="_blanck">
                  <i className="fab fa-twitter icons"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" target="_blanck">
                  <i className="fab fa-linkedin icons"></i>
                </a>
              </li>
              <li>
                <a href="https://www.google.com" target="_blanck">
                  <i className="fab fa-google-plus-square icons"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com" target="_blanck">
                  <i className="fab fa-youtube icons"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
