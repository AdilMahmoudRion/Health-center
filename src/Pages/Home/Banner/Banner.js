import React from "react";
import { Button } from "react-bootstrap";
import "./Banner.css";
import doctor from "../BannerImages/doctor.png"
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner-section">
      <div className="banner container">
        <div className="p-4">
          <img className="img" src={doctor} alt="doctor" />
        </div>
        <div className="description p-4">
          <h1 className="title">
            We care <br /> About Yor health
          </h1>
          <p>More Then 3300 physicians, scientists ans researchers 2026</p>
          <div>
            <Link to="/home">
              <Button type="button" className="">
                About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
