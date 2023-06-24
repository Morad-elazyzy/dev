import React from "react";
const Header = ({ scrollToCategories }) => {
  return (
    <header>
      <div
        className="header-content"
        style={{
          width: "90%",
          margin: "auto",
        }}
      >
        <div className="avatar-img">
          <img src="https://i.ibb.co/RYnZkV4/Ellipse-1.png" alt="profile" />
          <h3 className="hi">Hi im Morad Elazyzy</h3>
          <h2>im front end developer and ux/ui designer </h2>
          <p>
            experienced UX/UI developer proficient in both front-end development
            and design. With a passion for crafting intuitive user experiences,
            I bring together the best of both worlds to create impactful digital
            solutions.
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
