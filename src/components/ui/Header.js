import React from "react";
const Header = ({ scrollToCategories }) => {
  return (
    <header>
      <div className="header-content">
        <div className="avatar-img">
          <img src="https://i.ibb.co/RYnZkV4/Ellipse-1.png" alt="profile" />
          <h3 className="hi">Hi im Morad Elazyzy</h3>
          <h2>im front end developer and ux/ui designer </h2>
          <p>
            very interested in modern technologies, my focus is to create apps
            that look clean and coded clean.
          </p>
          <button className="main-btn" onClick={scrollToCategories}>
            View work
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
