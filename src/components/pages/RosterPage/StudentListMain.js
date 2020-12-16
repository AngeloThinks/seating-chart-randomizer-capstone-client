import React from "react";
import { Link } from "react-router-dom";
import { getStudentsForRoster } from "./students-helpers";
import "./RosterForm.css";
import ApiContext from "../../../ApiContext";
import CircleButton from "./CircleButton";
import Student from "./Student";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    console.log(this.props.match.params);

    fetch(`${config.API_ENDPOINT}/students/randomize/${rosterId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((studentsData) => {
        // console.log(studentsData,"studentsData")
        // const temp = studentsData.filter(student => student.classes_id === rosterId).map((studentData) => {
        //   return (
        //     <li key={studentData.id}>
        //       <Student
        //         id={studentData.id}
        //         teacher_id={studentData.teachers_id}
        //         classes_id={studentData.classses_id}
        //         first_name={studentData.first_name}
        //         last_name={studentData.last_name}
        //       />
        //     </li>
        //   );
        // });
        // this.setState({
        //   randomizeStudents: [...this.state.randomizeStudents, temp],
        // });
        this.context.randomizeStudent(studentsData);
      })
      .catch((error) =>
        console.log(error.message, "This is an error from studentData fetch")
      );
  };

  render() {
    const { rosterId } = this.props.match.params;
    // console.log(rosterId)
    console.log(this.props.match.params);

    const { students = [] } = this.context;
    // console.log(students)

    //This is getting the data
    const studentsForRoster = getStudentsForRoster(students, rosterId);
    console.log(studentsForRoster, "studentsForRoster");

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
    console.log(studentsForRosterOutput);

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
            {/* <FontAwesomeIcon icon="plus" /> */}
            Add Student
          </CircleButton>
        </div>

        {/*Randomize/Shuffle Button   */}
        <div className="StudentListMain__button-container">
          <CircleButton
            tag={Link}
            //need to find route to update page
            // to={`/roster/randomize/${rosterId}/1`}
            onClick={this.handleRandomizeStudents}
            type="button"
            className="StudentListMain__add-student-button"
          >
            {/* <FontAwesomeIcon icon="plus" /> */}
            Shuffle
          </CircleButton>
        </div>
      </section>
    );
  }
}
