import React, { Component } from "react";
import Banner from "./Banner";
import Cards from "./Cards";
import Search from "./Search";
import Logoes from "./Logoes";

import "../css/style.css";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Cards />
        <Search />
        <Logoes />
      </div>
    );
  }
}
