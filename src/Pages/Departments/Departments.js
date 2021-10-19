import React from 'react';
import './Departments.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faProcedures, faBaby, faHandHoldingMedical, faUserInjured,faBiohazard, faDiagnoses } from "@fortawesome/free-solid-svg-icons";

const Departments = () => {

    return (
      <div id="departments" className="container">
        <div className="text-center mt-4">
          <h1 className="fw-bold">Departments</h1>
          <h3>
            “Every mountain top is within reach if you just keep climbing.”
          </h3>
          <span>— Richard James Molloy</span>
        </div>
        <div className="deparments">
          <div className="dep-section">
            <div>
              <h1 className="logo">
                <FontAwesomeIcon icon={faBaby} />
              </h1>
            </div>
            <div className="dep-title ">
              <p className="dep-name">Pediatric</p>
            </div>
          </div>
          <div className="dep-section">
            <div>
              <h1 className="logo">
                <FontAwesomeIcon icon={faHandHoldingMedical} />{" "}
              </h1>
            </div>
            <div className="dep-title ">
              <p className="dep-name">Pulmonary</p>
            </div>
          </div>
          <div className="dep-section">
            <div>
              <h1 className="logo">
                {" "}
                <FontAwesomeIcon icon={faProcedures} />
              </h1>
            </div>
            <div className="dep-title ">
              <p className="dep-name">Pulmonary</p>
            </div>
          </div>
          <div className="dep-section">
            <div>
              <h1 className="logo">
                <FontAwesomeIcon icon={faUserInjured} />{" "}
              </h1>
            </div>
            <div className="dep-title ">
              <p className="dep-name">Cardiology</p>
            </div>
          </div>
          <div className="dep-section">
            <div>
              <h1 className="logo">
                <FontAwesomeIcon icon={faBiohazard} />{" "}
              </h1>
            </div>
            <div className="dep-title ">
              <p className="dep-name">Urology</p>
            </div>
          </div>
          <div className="dep-section">
            <div>
              <h1 className="logo">
                {" "}
                <FontAwesomeIcon icon={faDiagnoses} />
              </h1>
            </div>
            <div className="dep-title ">
              <p className="dep-name">Traumatology</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Departments;