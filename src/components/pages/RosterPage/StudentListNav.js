import React from "react";
import { NavLink, Link } from "react-router-dom";
import CircleButton from "./CircleButton";
import "./RosterForm.css";
import ApiContext from "../../../ApiContext";
import { countStudentsForRoster } from "./students-helpers";

//This page handles the nav bar on the left side of the screen

export default class StudentListNav extends React.Component {
  static contextType = ApiContext;

  render() {
    const { rosters = [], students = [] } = this.context;
    return (
      <div className="StudentListNav">
        <ul className="StudentListNav__list">
          {rosters.map((roster) => (
            <li key={roster.id}>
              <NavLink
                className="StudentListNav__folder-link"
                to={`/roster/${roster.id}`}
              >
                <div>{roster.name}</div>
                <span className="StudentListNav__num-students">
                  {countStudentsForRoster(students, roster.id)}
                </span>
                <span> students</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="StudentListNav__button-wrapper">
          <CircleButton
            tag={Link}
            to="/roster/new/add-roster"
            type="button"
            className="StudentListNav__add-roster-button"
          >
            Add Roster
          </CircleButton>
        </div>
      </div>
    );
  }
}
