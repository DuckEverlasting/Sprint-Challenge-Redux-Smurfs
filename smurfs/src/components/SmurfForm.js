import React from "react";
import { connect } from "react-redux";
import { postSmurf } from "../actions";

class SmurfForm extends React.Component {
  constructor() {
    super();
    this.state = {
      postInput: {
        name: "",
        age: "",
        height: ""
      },
    };
  }

  changeHandler = ev => {
    this.setState({ postInput: { ...this.state.postInput, [ev.target.name]: ev.target.value } });
  };

  submitHandler = ev => {
    ev.preventDefault();
    this.props.postSmurf(this.state.postInput)
    this.setState({ postInput: { name: "", age: "", height: "" } })
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.submitHandler}>
          <input
            onChange={this.changeHandler}
            placeholder="name"
            value={this.state.postInput.name}
            name="name"
          />
          <input
            onChange={this.changeHandler}
            placeholder="age"
            value={this.state.postInput.age}
            name="age"
          />
          <input
            onChange={this.changeHandler}
            placeholder="height"
            value={this.state.postInput.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { postSmurf }
)(SmurfForm);
