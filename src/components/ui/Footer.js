import React from "react";
import "../../style/footer.scss";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">moradelazyzy22@gmail.com</div>
        <div className="footer-center">
          <a
            href="https://github.com/morad-elazyzy"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-github-square"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/morad-elazyzy-8b12401a6/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a
            href="https://www.behance.net/morad-elazyzy"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-behance-square"></i>
          </a>
        </div>
        <div className="footer-left">
          <p>&copy; {year} Morad Elazyzy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
