import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  return (
    <div>
      <div className="card" id="card">
        <FontAwesomeIcon className="h-icon" icon={props.icon} />
        <p className="h-title">{props.title}</p>
        <p className="h-subTitle">{props.subTitle}</p>
        {/* <FontAwesomeIcon id="arrow" className="arrow" icon={faArrowRight} /> */}
      </div>
    </div>
  );
};

export default Card;
