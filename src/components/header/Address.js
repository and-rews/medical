import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHospital,
  faPhone,
  faThumbsUp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Address = () => {
  return (
    <div>
      <div className="address">
        <div className="a-left">
          <div className="a-item">
            <FontAwesomeIcon className="a-icon" icon={faHospital} />
            <div>
              <h4>Number 1 Hospital</h4>
              <h6>In United States</h6>
            </div>
          </div>
          <div className="a-item">
            <FontAwesomeIcon className="a-icon" icon={faUser} />
            <div>
              <h4>Personal Cabinet</h4>
              <h6>Qualified Staff</h6>
            </div>
          </div>
          <div className="a-item">
            <FontAwesomeIcon className="a-icon" icon={faThumbsUp} />
            <div>
              <h4>Get Result Online</h4>
              <h6>Satisfied Patients</h6>
            </div>
          </div>
        </div>
        <div className="a-right">
          {" "}
          <span>
            <FontAwesomeIcon icon={faPhone} /> Toll Free: 001992873533
          </span>
        </div>
      </div>
    </div>
  );
};

export default Address;
