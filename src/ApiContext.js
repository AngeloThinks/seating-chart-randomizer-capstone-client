import React from 'react'

export default React.createContext({
  students: [],
  rosters: [],
  addRoster: () => {},
  addStudent: () => {},
  deleteStudent: () => {},
  studentsByTeacherId: () => {}
})
