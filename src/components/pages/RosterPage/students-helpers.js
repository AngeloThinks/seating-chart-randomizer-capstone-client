/* eslint-disable eqeqeq */
export const findRoster = (rosters = [], rosterId) =>
  rosters.find((roster) => roster.id == rosterId);

export const findStudent = (students = [], studentId) =>
  students.find((student) => student.id == studentId);

export const getStudentsForRoster = (students = [], rosterId) =>
  !rosterId
    ? students
    : students.filter((student) => {
      // console.log(student.classes_id,"student.classes_id", rosterId, "rosterId")
      return student.classes_id == rosterId
    });

export const countStudentsForRoster = (students = [], rosterId) =>
  students.filter((student) => student.classes_id == rosterId).length;


