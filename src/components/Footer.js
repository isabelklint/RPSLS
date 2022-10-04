import React, { useState } from "react";
import "./Footer.css";
import Rules from "./Rules.js";
import Popup from "./Popup";

export default function Footer(props) {
let[ifOpen, setIfOpen] = useState(false);

const togglePopup = () => {
  setIfOpen(!ifOpen);
}
  return (
    <div className="row d-flex justify-content-center">
      <div className="footer col-10 col-lg-6 mt-5">
        <div className="row h-100 d-flex align-items-center px-2">
          <div className="col-4 d-flex flex-column ">
            <input type="button" value="SEE RULES" onClick={togglePopup} 
           />
           {ifOpen && (
              <Popup
                content={
                  <>
                   <img src="src/images/Rules.css" lt="rules">
                    </img>
                  </>
                }
                handleClose={togglePopup}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};