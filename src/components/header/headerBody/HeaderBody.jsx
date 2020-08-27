import React from "react";
import "./HeaderBody.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "tachyons";
const HeaderBody = () => {
  return (
    <div className="header_body">
      <div className="body_text tc">
        <h1 className="body_header_text flex flex-wrap justify-around">
          <ul className="ul1">
            <li>E</li>
            <li>m</li>
            <li>p</li>
            <li>o</li>
            <li>w</li>
            <li>e</li>
            <li>r</li>
          </ul>
          <div>&nbsp;</div>
          <ul className="mx-auto ul2">
            <li>Y</li>
            <li>o</li>
            <li>u</li>
            <li>r</li>
            <li>s</li>
            <li>e</li>
            <li>l</li>
            <li>f</li>
          </ul>
        </h1>
        <h3 className="">Your Course to Success</h3>
        <p className="">
          Build skills with courses, certificates, and degrees online from
          <br />
          <span className="code f3 courseBD">CourseBD</span>
        </p>
        <button className="header_btn">Join Now</button>
      </div>
    </div>
  );
};

export default HeaderBody;
