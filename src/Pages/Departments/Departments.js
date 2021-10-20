import React from "react";
import "./Departments.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faProcedures,
  faBaby,
  faHandHoldingMedical,
  faUserInjured,
  faBiohazard,
  faDiagnoses,
} from "@fortawesome/free-solid-svg-icons";

const Departments = () => {
  return (
    <div id="departments" className="container">
      <div className="text-center mt-4">
        <h1 className="fw-bold">Departments</h1>
        <h3>“Every mountain top is within reach if you just keep climbing.”</h3>
        <span>— Richard James Molloy</span>
      </div>

      <div className="departments-section">
        <div className="department">
          <div className="dep-item">
            <FontAwesomeIcon className="logo" icon={faBaby} />
            <p className="dep-name mt-2">Pediatric</p>
          </div>
        </div>
        <div className="department">
          <div className="dep-item">
            <FontAwesomeIcon className="logo" icon={faHandHoldingMedical} />
            <p className="dep-name mt-2">Pulmonary</p>
          </div>
        </div>
        <div className="department">
          <div className="dep-item">
            <FontAwesomeIcon className="logo" icon={faProcedures} />
            <p className="dep-name mt-2">Pulmonary</p>
          </div>
        </div>
        <div className="department">
          <div className="dep-item">
            <FontAwesomeIcon className="logo" icon={faUserInjured} />
            <p className="dep-name mt-2">Cardiology</p>
          </div>
        </div>
        <div className="department">
          <div className="dep-item">
            <FontAwesomeIcon className="logo" icon={faBiohazard} />
            <p className="dep-name mt-2">Urology</p>
          </div>
        </div>
        <div className="department">
          <div className="dep-item">
            <FontAwesomeIcon className="logo" icon={faDiagnoses} />
            <p className="dep-name mt-2">Traumatology</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Departments;
