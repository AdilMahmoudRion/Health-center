import React, { useEffect, useState } from "react";
import Service from "./Service/Service";
import './MedicalServices.css'

const MedicalServices = () => {
   const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("FakeData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container" id="medicalServices">
      <h1>medical services</h1>
      <div className="service-container">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
      
      
    </div>
  );
};

export default MedicalServices;