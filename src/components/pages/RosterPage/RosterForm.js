import React from "react";
import "./RosterForm.css";
import ApiContext from "../../../ApiContext";

export default class RosterForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    const { className } = this.props;

    return (
      <ApiContext.Consumer>
        {({ rosters }) => (
          <form
            onSubmit={this.handleSubmit}
            className={["roster-form", className].join(" ")}
            action="#"
          >
            <roster-form-label>Subject</roster-form-label>
            <input type="text"></input>
            <label>Content</label>
            <input type="text"></input>
            <label>Roster</label>
            <select>
              {rosters.map((roster) => (
                <option value={roster.id}>{roster.name}</option>
              ))}
            </select>
            <button type="submit">Create Roster</button>
          </form>
        )}
      </ApiContext.Consumer>
    );
  }
}
