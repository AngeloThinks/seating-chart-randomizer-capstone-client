import React from "react";
import { Link } from "react-router-dom";
// import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./RosterForm.css";
import PropTypes from "prop-types";
import ApiContext from "../../../ApiContext";
import Config from "../../../config";

export default class Student extends React.Component {
  static defaultProps = {
    onDeleteStudent: () => {},
  };
  static contextType = ApiContext;

  deleteStudent = () => {
    const studentId = this.props.id;

    fetch(`${Config.API_ENDPOINT}/students/${studentId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
      })
      .then(() => {
        this.context.deleteStudent(studentId);
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  render() {
    const { id, teachers_id, classes_id, first_name, last_name } = this.props;
    return (
      <div className="Student">
        <h2 className="Student__title">
          <Link to={`/roster/student/${id}`}>
            {first_name} {last_name}{" "}
          </Link>
        </h2>
        <button
          className="Student__delete"
          type="button"
          onClick={this.deleteStudent}
        >
          {/* <FontAwesomeIcon icon="trash-alt" />  */}
          Remove
        </button>
        {/* <div className="Student__dates">
          <div className="Student__dates-modified">
            Modified{" "}
            <span className="Date">{format(modified, "Do MMM YYYY")}</span>
          </div>
        </div> */}
      </div>
    );
  }
}
Student.propTypes = {
  id: PropTypes.number,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  // modified: PropTypes.string,
  onDeleteStudent: PropTypes.func,
};

// id: PropTypes.number,
// teacher_id: PropTypes.string,
// classes_id: PropTypes.string,
// first_name: PropTypes.string,
// last_name: PropTypes.string,
