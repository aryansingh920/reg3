import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import "./style.css";

const ThanksForRegister = (props) => {
  return (
    <div>
      <NavBar />
      <div className="thank-you-for-registering">THANK YOU FOR REGISTERING</div>
      <p className="hello">
        You will be notified via email once your exclusive dashboard
      </p>
      <img className="img" src="./softball2.png" />
    </div>
  );
};

export default ThanksForRegister;
