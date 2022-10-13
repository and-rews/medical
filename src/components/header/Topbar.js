import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin, faClock } from "@fortawesome/free-solid-svg-icons";

const Topbar = () => {
  return (
    <div>
      <div className="topbar">
        <div className="top-left">
          <div>
            <FontAwesomeIcon className="l-icon" icon={faLocationPin} />
            <span>234 Triumph, Los Angeles, California, US</span>
          </div>
          <div>
            <FontAwesomeIcon className="l-icon" icon={faClock} />
            <span>Mon - Sat 8.00 - 18.00. Sunday CLOSED</span>
          </div>
        </div>
        <div className="top-right">
          <div>
            <FontAwesomeIcon className="r-icon" icon={faClock} />
            <FontAwesomeIcon className="r-icon" icon={faLocationPin} />
            <FontAwesomeIcon className="r-icon" icon={faClock} />
            <FontAwesomeIcon className="r-icon" icon={faLocationPin} />
            <button className="t-btn">GET A APPOINTMENT!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
