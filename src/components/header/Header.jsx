import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "tachyons";
import HeaderBody from "./headerBody/HeaderBody";
import logo from "./img/logo.png";
const Header = () => {
  return (
    <div>
      {/* Header Logo */}
      <div className="header_logo w100 bg-dark pa3 mb0 flex justify-between items-center">
        <a className="header_link" href="#">
          <img className="w4 w5-l" src={logo} alt="Logo" />
        </a>
        <button className="btn btn-success w4 w5-l h3-l f4 f3-l">Login</button>
      </div>
      {/* Header Logo End */}
      {/* Header Body Section Start */}
      <HeaderBody></HeaderBody>
      {/* Header Body Section End */}
    </div>
  );
};

export default Header;
