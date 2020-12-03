import React from "react";
import ApiContext from "../../../ApiContext";
import { findStudent } from "./students-helpers";
import Student from "./Student";
import "./RosterForm.css";

export default class StudentPageMain extends React.Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };
  static contextType = ApiContext;

  handleDeleteStudent = (studentId) => {
    //Insert Endpoint to delete student from back end
    this.props.history.push(`/roster/student/:studentId`);
  };

  render() {
    const { students = [] } = this.context;
    const { studentId } = this.props.match.params;

    const student = findStudent(students, studentId) || {
      content: "",
    };
    console.log(student, "HERE IT IS");
    return (
      <section className="StudentPageMain">
        <Student
          id={student.id}
          first_name={student.first_name}
          last_name={student.last_name}
          // modified={student.modified}
          onDeleteStudent={this.handleDeleteStudent}
        />
        {/* <div className="StudentPageMain__content">
          {student.content.split(/\n \r|\n/).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div> */}
        <div></div>
      </section>
    );
  }
}
