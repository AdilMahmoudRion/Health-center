import React from "react";
import { Link } from "react-router-dom";
import './Service.css';

const Service = ({ service }) => {
        const {id, name, price, img } = service;
    return (
      <div className="popular-service col-sm-1 col-md-3">
        <div className="service">
          <div>
            <img className="service-img img-fluid" src={img} alt="" />
          </div>
          <div className="service-name ">
            <Link to={`/booking/${id}`}>{name}</Link>
            <p className="price">${price}</p>
          </div>
        </div>
      </div>
    );
};

export default Service;
