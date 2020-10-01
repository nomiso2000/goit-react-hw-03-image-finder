import React, { Component } from "react";
import Loader from "react-loader-spinner";
import "./Loader.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Loader
          type="Grid"
          color="#00BFFF"
          height={80}
          width={80}
          timeout={10000}
        />
      </div>
    );
  }
}
