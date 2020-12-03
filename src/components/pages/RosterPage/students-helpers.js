export const findRoster = (rosters = [], rosterId) =>
  rosters.find((roster) => roster.id === rosterId);

export const findStudent = (students = [], studentId) =>
  students.find((student) => student.id === studentId);

export const getStudentsForRoster = (students = [], rosterId) =>
  !rosterId
    ? students
    : students.filter((student) => student.classes_id === rosterId);

export const countStudentsForRoster = (students = [], rosterId) =>
  students.filter((student) => student.classes_id === rosterId).length;

  //randomize method
// export const getStudentsByTeacherId = (students = [], rosterId) =>
//   !rosterId
//     ? students
//     : students.filter((student) => student.teachers_id === rosterId);

