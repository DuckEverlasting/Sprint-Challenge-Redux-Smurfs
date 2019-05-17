import React from "react";
import { connect } from "react-redux";
import { putSmurf, killSmurf } from "../actions";

class Smurf extends React.Component {
  constructor() {
    super();
    this.state = {
      editActive: false,
      editInput: {
        name: "",
        age: "",
        height: ""
      }
    };
  }
  editHandler = ev => {
    ev.preventDefault();
    if (!this.state.editActive) {
      this.setState({
        editActive: true,
        editInput: {
          name: this.props.smurf.name,
          age: this.props.smurf.age,
          height: this.props.smurf.height
        }
      });
    } else {
      this.props.putSmurf(this.state.editInput, this.props.smurf.id);
      this.setState({
        editActive: false,
        editInput: {
          name: "",
          age: "",
          height: ""
        }
      });
    }
  };

  changeHandler = ev => {
    this.setState({
      editInput: { ...this.state.editInput, [ev.target.name]: ev.target.value }
    });
  };

  deleteHandler = ev => {
    ev.preventDefault();
    this.props.killSmurf(this.props.smurf.id);
  };

  render() {
    return (
      <div className="Smurf">
        {!this.state.editActive ? (
          <React.Fragment>
            <h3>{this.props.smurf.name}</h3>
            <p>{this.props.smurf.age} smurf years old</p>
            <p>{this.props.smurf.height} tall</p>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <input
              className="name"
              name="name"
              value={this.state.editInput.name}
              onChange={this.changeHandler}
            />
            <div>
              <input
                className="age"
                name="age"
                value={this.state.editInput.age}
                onChange={this.changeHandler}
              />
              <span> smurf years old</span>
            </div>
            <div>
              <input
                className="height"
                name="height"
                value={this.state.editInput.height}
                onChange={this.changeHandler}
              />
              <span> tall</span>
            </div>
          </React.Fragment>
        )}
        <div className="button-box">
          <button onClick={this.editHandler}>{this.state.editActive ? "submit" : "edit"}</button>
          <button onClick={this.deleteHandler}>delete</button>
        </div>
      </div>
    );
  }
}

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default connect(
  null,
  { putSmurf, killSmurf }
)(Smurf);
