import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
const CategoriesList = ({ setCategoriesPosition }) => {
  const posRef = useRef(null);
  useEffect(
    () => setCategoriesPosition(posRef.current.offsetTop),
    // eslint-disable-next-line
    []
  );
  return (
    <div className="projects-categories">
      <div className="categorie" ref={posRef}>
        <div className="cat-image">
          <img
            src="https://i.ibb.co/qkt4tCx/609acf3b7a299c11d4b136c9-ui-ux-design-tools.jpg"
            alt=""
          />
          <div className="cat-name">
            <NavLink to="/design">Design </NavLink>
          </div>
          <div className="cat-desc">
            deep knowledge of ux/ui fundamentals and advanced design concepts
            such as(sketching, wireframing, prototyping...).
          </div>
        </div>
      </div>
      <div className="categorie">
        <div className="cat-image">
          <img
            src="https://i.ibb.co/99QrJyw/frontend-security-vulnerabilities-min.jpg"
            alt=""
          />
          <div className="cat-name">
            <NavLink to="/front">Front end</NavLink>
          </div>
          <div className="cat-desc">
            solid front end fundamentals(html, css, sass, boostrab, javascript,
            react...) ,most of my projects build with react but i can work with
            other frameworks as well.
          </div>
        </div>
      </div>
      <div className="categorie">
        <div className="cat-image">
          <img src="https://i.ibb.co/H7MfbKk/how-to-start-a-blog.png" alt="" />
          <div className="cat-name">
            <NavLink to="/blogs">Blogs </NavLink>
          </div>
          <div className="cat-desc">
            love sharing my knowledge with the community and here is few blogs
            where i talk about code and design.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesList;
