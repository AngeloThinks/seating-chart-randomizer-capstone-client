// import React, { useEffect, useState } from "react";
// import { Link, useRouteMatch } from "react-router-dom";
// import config from "../../../config";
// // import { getStudentsForRoster } from "./students-helpers";
// import "./RosterForm.css";
// // import ApiContext from "../../../ApiContext";
// import CircleButton from "./CircleButton";
// import Student from "./Student";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { render } from "node-sass";

// class RandomizeStudent extends React.Component {
//   state = {
//     randomizeStudents: [],
//   };
//   static defaultProps = {
//     match: {
//       params: {},
//     },
//   };
// //needs to re-render every time you click shuffle
//   handleRandomizeStudents() {
//     //        fetch(`${config.API_ENDPOINT}/randomize/${rosterId}/:teachers Id` ) when ready to implement login
//     const { roster_id } = this.props.match.params;
//     console.log(this.props.match.params);

//     fetch(`${config.API_ENDPOINT}/students/randomize/${roster_id}/1`)
//       .then((res) => {
//         if (!res.ok) return res.json().then((e) => console.log(e));

//         return res.json();
//       })
//       .then((students) => {
//         console.log(students);
//         const temp = students.map((student) => {
//           return (
//             <li key={student.id}>
//               <Student
//                 id={student.id}
//                 teacher_id={student.teachers_id}
//                 classes_id={student.classses_id}
//                 first_name={student.first_name}
//                 last_name={student.last_name}
//               />
//             </li>
//           );
//         });
//         this.setState({
//           randomizeStudents: [...this.state.randomizeStudents, temp],
//         });
//       });
//   }
//   componentDidMount() {
//     this.handleRandomizeStudents();
//   }
//   render() {
//     const { roster_id } = this.props.match.params;

//     return (
//       <section className="StudentListMain">
//         <ul>{this.state.randomizeStudents}</ul>
//         <div className="StudentListMain__button-container">
//           <CircleButton
//             tag={Link}
//             to="/roster/new/add-student"
//             type="button"
//             className="StudentListMain__add-student-button"
//           >
//             <FontAwesomeIcon icon="plus" />
//             Add Student
//           </CircleButton>
//         </div>

//         {/* Randomize Button   */}
//         <div className="StudentListMain__button-container">
//           <CircleButton
//             tag={Link}
//             //need to find route to update page
//             to={`/roster/randomize/${roster_id}/1`}
//             type="button"
//             className="StudentListMain__add-student-button"
//           >
//             <FontAwesomeIcon icon="plus" />
//             Shuffle
//           </CircleButton>
//         </div>
//       </section>
//     );
//   }
// }

// export default RandomizeStudent;
