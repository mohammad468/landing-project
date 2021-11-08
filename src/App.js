import React, { Component } from "react";
import MyNav from "./components/MyNav";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Search from "./components/Search";
import Logoes from "./components/Logoes";
import Footer from "./components/Footer";

import "./css/style.css";

class App extends Component {
  render() {
    return (
      <div>
        <MyNav />
        <Banner />
        <Cards />
        <Search />
        <Logoes />
        <Footer />
      </div>
    );
  }
}

export default App;
