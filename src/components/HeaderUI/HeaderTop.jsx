import React from "react";

const HeaderTop = () => {
  return (
    <div className="header-top">
      <div>
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
      <div>
        <ul className="contact-us flex">
          <li>
            <i className="fas fa-phone"></i>+92(304)386-6719
          </li>
          <li>
            <i className="fas fa-phone"></i>+92(317)011-3001
          </li>
          <li>
            <a href="/" className="btn">
              call me back
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderTop;
