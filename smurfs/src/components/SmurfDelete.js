import React from "react";

class SmurfDelete extends React.Component {
  constructor() {
    super();
    this.state = {
      deleteInput: {
        name: "",
        age: "",
        height: ""
      },
    };
  }
  render() {
    return (
      <div className="SmurfDelete">
        <form onSubmit={this.submitHandler}>
          <input
            onChange={this.changeHandler}
            placeholder="name"
            value={this.state.deleteInput}
          />
          <button type="submit">Time to leave the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfDelete;
