import React, { Component } from "react";
import MyNav from "./components/MyNav";
import Landing from "./components/Landing";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";

import "./css/style.css";

class App extends Component {
  render() {
    return (
      <div>
        <MyNav />
        <Switch>
          <Route
            exact
            path="/Products"
            render={(props) => <Products name="mohammad" {...props} />}
          />
          <Route
            exact
            path="/"
            render={(props) => <Landing name="mohammad" {...props} />}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
