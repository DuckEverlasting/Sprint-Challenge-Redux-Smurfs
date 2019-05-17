import React from "react";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import SmurfDelete from "./components/SmurfDelete"

const App = () => {
  // killSmurf = ev => {
  //   ev.preventDefault();
  // }

  // handleDeleteInputChange = ev => {
  //   this.setState({ deleteInput: ev.target.value });
  // };
    return (
      <div className="App">
        <h1>Smurf Village REDUX</h1>
        <SmurfForm />
        <Smurfs />
      </div>
    );
  }

export default App;
