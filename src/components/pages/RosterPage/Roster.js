//this page is the logic for the submit form

import React, { useState } from "react";
import Rosterform from "./RosterForm";
import "./RosterForm.css";

const Roster = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className="roster-form-container">
        <span className="roster-close-btn"></span>
        <div className="roster-form-content-left">
          <img
            src="images/hen-chickens.svg"
            alt="hen-chicken"
            className="form-img"
          />
        </div>

        {!isSubmitted ? (
          <Rosterform submitForm=
          {submitForm} />
        ) : (
          <Roster />
        )}
      </div>
    </>
  );
};

export default Roster;
