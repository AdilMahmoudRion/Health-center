import React from "react";
import img from "../Home/BannerImages/banner3.png"
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div id="aboutUs" className="container mt-5">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <div>
            <h5>Welcome To Health Center</h5>
            <p>
               consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim.
            </p>
          </div>
          <div>
            <ul>
              <li>Cardiothoracic Surgery</li>
              <li>Cardiovascular Diseases</li> <li>Ophthalmology</li>
              <li> Ophthalmology</li>
              <li>Cardiothoracic Surgery</li>
              <li>Cardiovascular Diseases</li>
              <li>Ophthalmology</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <img className="img" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
