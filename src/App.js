import React, { Component } from "react";
import myNavbar from "./components/myNavbar";

import "./css/style.css";

class App extends Component {
  render() {
    return (
      <div>
        <myNavbar />
        <myNavbar />
        <myNavbar />
        <myNavbar />
        <myNavbar />
      </div>
    );
  }
}

export default App;
