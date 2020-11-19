import React, { Component } from "react";
import ValidationError from "../../../validationError";
import ApiContext from "../../../ApiContext";
import Config from '../../../config'
import './RosterForm.css'

class AddStudent extends Component {
  state = {
    student: {
      title: "",
      touched: false,
    },
    rosterId: {
      value: "",
    },
    content: {
      value: "",
    },
  };

  static contextType = ApiContext;

  updateStudent(student) {
    this.setState({ student: { title: student, touched: true } });
    console.log(this.state.student.title);
  }

  updateContent(content) {
    this.setState({ content: { value: content } });
  }

  updateRosterId(id) {
    this.setState({ rosterId: { value: id } });
  }

  validateName() {
    const student = this.state.student.title.trim();
    if (student.length === 0) {
      return "Text is required";
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const { student, rosterId, content } = this.state;
    console.log(student.title);
    const studentObj = {
      title: student.title,
      content: content.value,
      roster_id: parseInt(rosterId.value),
      
    };
    console.log(studentObj)
    const url = `${Config.API_ENDPOINT}/students`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentObj),
    })
      .then((response) => response.json())
      .then((student) => {
        this.context.addStudent(student);
        this.props.history.push(`/`);
      });
  }
  render() {
    const { rosters } = this.context;

    return (
      <form onSubmit={(e) => this.handleSubmit(e)} style={{ color: "white" }}>
        <label>Student Name:</label>
        <input
          type="text"
          placeholder="Enter student Name"
          onChange={(e) => this.updateStudent(e.target.value)}
        />
        {this.state.student.touched && (
          <ValidationError message={this.validateName()} />
        )}
        <label>Enter Note:</label>
        <input
          type="text"
          placeholder="Enter Description"
          onChange={(e) => this.updateContent(e.target.value)}
        />
        <label>Select Roster:</label>
        <select
          name="drop-down"
          id="drop-down"
          onChange={(e) => this.updaterosterId(e.target.value)}
        >
          <option>Must Select roster</option>
          {rosters.map((roster) => (
            <option key={roster.id} value={roster.id}>
              {roster.name}
            </option>
          ))}
        </select>
        <button type="submit" disabled={this.validateName()}>
          Add
        </button>
      </form>
    );
  }
}

export default AddStudent;



