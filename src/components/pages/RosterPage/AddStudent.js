import React, { Component } from "react";
import ValidationError from "../../../validationError";
import ApiContext from "../../../ApiContext";
import Config from "../../../config";
import "./RosterForm.css";

class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: {
        value: "",
        touched: false,
      },
      last_name: {
        value: "",
        touched: false,
      },
      classes_id: {
        value:"0",
        touche: false,
      }
    };
  }

  static contextType = ApiContext;

  updateFirst_name(first_name) {
    console.log(first_name);
    this.setState({ first_name: { value: first_name, touched: true } });
    console.log(this.state.first_name.value);
  }
  updateLast_name(last_name) {
    this.setState({ last_name: { value: last_name, touched: true } });
    console.log(this.state.last_name.value);
  }
  // updateContent(content) {
  //   this.setState({ content: { value: content } });
  // }
  updateRosterId(id) {
    console.log(id,'THIS IS ID')
    this.setState({ classes_id: { value: id } });
  }
  validateFirst_name() {
    console.log(this.state.first_name);
    const first_name = this.state.first_name.value.trim();
    if (first_name.length === 0) {
      return "Text is required";
    }
  }
  validateLast_name() {
    const last_name = this.state.last_name.value.trim();
    if (last_name.length === 0) {
      return "Text is required";
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const { classes_id, first_name, last_name } = this.state;

    const studentObj = {
      teachers_id: 1,
      classes_id: classes_id.value,
      first_name: first_name.value,
      last_name: last_name.value,
    };
    console.log(studentObj,"Student OBJECT");
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
        console.log(student,'API Student')
        this.props.history.push(`/roster`);
      });
  }

  render() {
    const { first_name, last_name } = this.state;
    const { rosters } = this.context;

    return (
      <form
        onSubmit={(e) => this.handleSubmit(e)}
        style={{ color: "white" }}
      >
        <label>First Name:</label>
        <input
          type="text"
          placeholder="Student First Name"
          value={first_name.value}
          name="first_name"
          onChange={(e) => this.updateFirst_name(e.target.value)}
        />
        {this.state.first_name.touched && (
          <ValidationError message={this.validateFirst_name()} />
        )}
        <label>Last Name:</label>
        <input
          type="text"
          placeholder="Student Last Name"
          value={last_name.value}
          name="last_name"
          onChange={(e) => this.updateLast_name(e.target.value)}
        />
        {this.state.last_name.touched && (
          <ValidationError message={this.validateLast_name()} />
        )}
        <label>Select Roster:</label>
        <select
          name="drop-down"
          id="drop-down"
          value={this.state.classes_id.value}
          onChange={(e) => this.updateRosterId(e.target.value)}
        >
          <option value='0'>Must Select roster</option>
          {rosters.map((roster) => (
            <option key={roster.id} value={roster.id}>
              {roster.name}
            </option>
          ))}
        </select>
        <button type="submit" disabled={this.validateFirst_name()}>
          Add
        </button>
      </form>
    );
  }
}

export default AddStudent;
