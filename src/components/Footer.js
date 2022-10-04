import React from "react";
import "./Footer.css";
import Rules from "./Rules.js";

export default function Footer(props) {
  return (
    <div className="row d-flex justify-content-center">
      <div className="footer col-10 col-lg-6 mt-5">
        <div className="row h-100 d-flex align-items-center px-2">
          <div className="col-4 d-flex flex-column ">
            <Rules />
          </div>
        </div>
      </div>
      </div>    
  );
};