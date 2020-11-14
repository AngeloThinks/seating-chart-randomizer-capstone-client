import React from "react";
import useRosterForm from "./useRosterForm";
import validateRosterInfo from './validateRosterInfo'
import './RosterForm.css'

const Rosterform = ({submitForm}) => {
  const { handleChange, values, handleSubmit, errors } 
  = useRosterForm(submitForm, validateRosterInfo);

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>
          Create your rosters below.
        </h1>
        <div className="form-inputs">
          <label htmlFor="first-name" className="form-label">
            First Name
          </label>
          <input
            id="name"
            type="first-name"
            name="first-name"
            className="form-input"
            placeholder="Enter student's first name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className="roster-form-inputs">
          <label htmlFor="last_name" className="form-label">
            Last Name
          </label>
          <input
            id="last_name"
            type="last_name"
            name="last_name"
            className="form-input"
            placeholder="Enter student's last name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="roster-form-inputs">
          <label htmlFor="class_name" className="form-label">
            Class Name
          </label>
          <input
            id="class"
            type="class_name"
            name="class_name"
            className="form-input"
            placeholder="i.e. Math, Chemistry, English"
            value={values.name}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <button className="form-input-btn" type="submit">
          Create
        </button>

      </form>
    </div>
  );
};

export default Rosterform;
