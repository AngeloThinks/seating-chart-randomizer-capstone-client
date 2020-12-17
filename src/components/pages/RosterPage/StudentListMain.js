import React from "react";
import { Link } from "react-router-dom";
import { getStudentsForRoster } from "./students-helpers";
import "./RosterForm.css";
import ApiContext from "../../../ApiContext";
import CircleButton from "./CircleButton";
import Student from "./Student";
import config from "../../../config";

export default class StudentListMain extends React.Component {
  state = {
    randomizeStudents: [],
  };
  static defaultProps = {
    match: {
      params: {},
    },
  };
  static contextType = ApiContext;

  handleRandomizeStudents = () => {
    const { rosterId } = this.props.match.params;
    fetch(`${config.API_ENDPOINT}/students/randomize/${rosterId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((studentsData) => {
        this.context.randomizeStudent(studentsData);
      })
      .catch((error) =>
        console.log(error.message, "This is an error from studentData fetch")
      );
  };

  render() {
    const { rosterId } = this.props.match.params;
    // console.log(this.props.match.params);

    const { students = [] } = this.context;

    //This is getting the data
    const studentsForRoster = getStudentsForRoster(students, rosterId);

    //Prepping the data for output
    let studentsForRosterOutput = studentsForRoster.map((student) => {
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
    });

    return (
      <section className="StudentListMain">
        <ul>{studentsForRosterOutput}</ul>
        <div className="StudentListMain__button-container">
          <CircleButton
            tag={Link}
            to="/roster/new/add-student"
            type="button"
            className="StudentListMain__add-student-button"
          >
            Add Student
          </CircleButton>
        </div>

        {/*Randomize/Shuffle Button   */}
        <div className="StudentListMain__button-container">
          <CircleButton
            tag={Link}
            onClick={this.handleRandomizeStudents}
            type="button"
            className="StudentListMain__add-student-button"
          >
            Shuffle
          </CircleButton>
        </div>
      </section>
    );
  }
}
