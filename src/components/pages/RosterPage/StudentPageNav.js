import React from "react";
import CircleButton  from "./CircleButton";
import { findStudent, findRoster } from "./students-helpers";
import "./RosterForm.css";
import ApiContext from "../../../ApiContext";

export default class StudentPageNav extends React.Component {
  static defaultProps = {
    history: {
      goBack: () => {},
    },
    match: {
      params: {},
    },
  };
  static contextType = ApiContext;

  render() {
    const { students, rosters } = this.context;
    const { studentId } = this.props.match.params;
    const student = findStudent(students, studentId) || {};

    const roster = findRoster(rosters, student.rosterId);
    return (
      <div className="StudentPageNav">
        <CircleButton
          tag="button"
          role="link"
          onClick={() => this.props.history.goBack()}
          className="StudentPageNav__back-button"
        >
          <br />
          Back
        </CircleButton>
        {roster && (
          <h3 className="StudentPageNav__roster-name">{roster.name}</h3>
        )}
      </div>
    );
  }
}
