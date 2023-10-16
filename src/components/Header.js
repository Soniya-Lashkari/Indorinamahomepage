import React from "react";
import "./Header.css";
import img from "../image/search-svgrepo-com 3.png";
import img2 from "../image/location-svgrepo-com 2.svg";
import img3 from "../image/Ellipse 788.png";
export const Header = () => {
  return (
    <div className="Header">
      <div className="hlogo">
        <h6>INDORINAMA</h6>
        <p>ADVERTISING & DIGITAL MARKETING</p>
      </div>
      <div className="hsearch">
        <div class="search-container">
          <div className="search-icon">
            <i className="fa fa-search">
              {" "}
              <img src={img} />
            </i>
          </div>
          <input type="text" className="search-input" placeholder="Search" />
          <div className="search-icon">
            <i className="fa fa-search">
              {" "}
              <img src={img2} />
            </i>
          </div>
        </div>
      </div>
      <div className="hright">
        <p>INR( RS )</p>
        <img src={img3} />
        <h5>Log In</h5>
      </div>
    </div>
  );
};
export default Header;
