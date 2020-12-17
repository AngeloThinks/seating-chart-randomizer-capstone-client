import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StudentListNav from "./StudentListNav";
import StudentPageNav from "./StudentPageNav";
import StudentListMain from "./StudentListMain";
import StudentPageMain from "./StudentPageMain";
import AddRoster from "./AddRoster";
import AddStudent from "./AddStudent";
import AddBoundaries from "./AddBoundaries";
import ApiContext from "../../../ApiContext";
import config from "../../../config";
import RosterForm from "./RosterForm";
import "./RosterForm.css";

export default class Roster extends Component {
  state = {
    students: [],
    rosters: [],
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/students`),
      fetch(`${config.API_ENDPOINT}/classes`),
    ])
      .then(([studentsRes, rostersRes]) => {
        if (!studentsRes.ok)
          return studentsRes.json().then((e) => Promise.reject(e));
        if (!rostersRes.ok)
          return rostersRes.json().then((e) => Promise.reject(e));

        return Promise.all([studentsRes.json(), rostersRes.json()]);
      })
      .then(([students, rosters]) => {
        // console.log(students, rosters);
        this.setState({ students, rosters });
      })
      .catch((error) => {
        console.error({ error });
      });
  }

  //Event handlers in Roster Page

  handleDeleteStudent = (studentId) => {
    this.setState({
      students: this.state.students.filter(
        (student) => student.id !== studentId
      ),
    });
  };

  // handleDeleteRoster = (rosterId) => {
  //   this.setState({
  //     rosters: this.state.rosters.filter((roster) => roster.id !== rosterId),
  //   });
  // };

  handleAddRoster = (roster) => {
    this.setState({
      rosters: [...this.state.rosters, roster],
    });
  };

  handleAddStudent = (student) => {
    console.log(student);
    this.setState({
      students: [...this.state.students, student],
    });
    console.log(this.state.students);
  };

  //This is now being handled by StudentListMain

  handleRandomizeStudent = (students) => {
    let oldStudents = [...this.state.students];
    students.forEach((student) => {
      let found = oldStudents.findIndex((s) => s.id === student.id);
      if (found >= 0) oldStudents.splice(found, 1);
      oldStudents.push(student);
    });

    this.setState({
      students: oldStudents,
    });
    // console.log(this.state.students);
  };

  //Render Routers

  renderNavRoutes() {
    return (
      <>
        {[
          "/roster",
          "/roster/:rosterId",
          "/roster/randomize/:roster_id/:classes_id",
        ].map((path) => (
          <Route exact key={path} path={path} component={StudentListNav} />
        ))}
        <Route
          exact
          path="/roster/student/:studentId"
          component={StudentPageNav}
        />
        <Route 
        exact 
        path="/roster/new/add-roster" 
        component={StudentPageNav} />
        <Route
          exact
          path="/roster/new/add-student"
          component={StudentPageNav}
        />
      </>
    );
  }

  renderMainRoutes() {
    return (
      <>
        {["/roster", "/roster/:rosterId"].map((path) => (
          <Route exact key={path} path={path} component={StudentListMain} />
        ))}

        <Route
          exact
          path="/roster/student/:studentId"
          component={StudentPageMain}
        />
        <Route exact path="/roster/new/add-roster" component={AddRoster} />
        <Route exact path="/roster/new/add-student" component={AddStudent} />
        <Route path="/roster/roster-form" component={RosterForm} />
      </>
    );
  }

  render() {
    const value = {
      students: this.state.students,
      rosters: this.state.rosters,
      deleteStudent: this.handleDeleteStudent,
      deleteRoster: this.handleDeleteRoster,
      addRoster: this.handleAddRoster,
      addStudent: this.handleAddStudent,
      randomizeStudent: this.handleRandomizeStudent,
    };
    return (
      <ApiContext.Provider value={value}>
        <div className="Roster">
          <AddBoundaries>
            <nav className="Roster__nav">{this.renderNavRoutes()}</nav>
          </AddBoundaries>
          <header className="Roster__header">
            <h1>
              <Link to="/roster">Rosters</Link>{" "}
              {/* <FontAwesomeIcon icon="check-double" /> */}
            </h1>
          </header>
          <AddBoundaries>
            <main className="Roster__main">{this.renderMainRoutes()}</main>
          </AddBoundaries>
        </div>
      </ApiContext.Provider>
    );
  }
}
