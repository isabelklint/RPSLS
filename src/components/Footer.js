import React, { useState } from "react";
import "./Footer.css";
import Popup from "./Popup";

export default function Footer(props) {
  let [ifOpen, setIfOpen] = useState(false);

  const togglePopup = () => {
    setIfOpen(!ifOpen);
  };
  return (
    <div className="footer">
      <div className="reset-btn ">
        <button className="d-block" onClick={() => window.location.reload(false)}>RESET SCORE</button>
      </div>
      <input type="button" className="d-block" value="SEE RULES" onClick={togglePopup} />
      {ifOpen && (
        <Popup
          content={<img src="src/images/Rules.png" alt="rules"></img>}
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}
