import React from "react";
import Rulepic from "../images/Rules.png";
import "./Popup.css";

const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          <img src={Rulepic} alt="Rules image" />;
        </span>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;
