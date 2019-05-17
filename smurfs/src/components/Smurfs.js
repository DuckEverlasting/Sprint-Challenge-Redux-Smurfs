import React from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";

import Smurf from "./Smurf";

class Smurfs extends React.Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="Smurfs">
        {this.props.smurfs &&
          this.props.smurfs.map(smurf => {
            return <Smurf smurf={smurf} key={smurf.id} />;
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(Smurfs);
