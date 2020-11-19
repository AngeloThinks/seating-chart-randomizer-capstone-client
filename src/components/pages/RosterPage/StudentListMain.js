import React from "react";
import { Link } from "react-router-dom";
import { getStudentsForRoster } from "./students-helpers";
import "./RosterForm.css";
import ApiContext from "../../../ApiContext";
import CircleButton from "./CircleButton";
import Student from "./Student";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default class StudentListMain extends React.Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };
  static contextType = ApiContext;

  render() {
    const { rosterId } = this.props.match.params;
    // console.log(rosterId)
    console.log(this.props.match.params)
    
    const { students = [] } = this.context;
    // console.log(students)
    const studentsForRoster = getStudentsForRoster(
      students,
      rosterId
    );
    console.log(studentsForRoster)
    return (
      <section className="StudentListMain">
        <ul>
          {studentsForRoster.map((student) => {
            return (
              <li key={student.id}>
                <Student
                  id={student.id}
                  teacher_id={student.teachers_id}
                  classes_id={student.classses_id}
                  first_name={student.first_name}
                  last_name={student.last_name}
                />
              </li>
            );
          })}
        </ul>
        <div className="StudentListMain__button-container">
        
          <CircleButton
            tag={Link}
            to="/roster/add-student"
            type="button"
            className="StudentListMain__add-student-button"
          >
            <FontAwesomeIcon icon="plus" />
         
           Add Student
          </CircleButton>
        </div>
      </section>
    );
  }
}
