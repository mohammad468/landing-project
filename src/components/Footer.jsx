import React, { Component } from "react";
import "../css/style.css";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <div className="bg-warning text-dark text-center">
        <Container>
          <h2 className="py-3">All Right By Mohammad Mohseni</h2>
        </Container>
      </div>
    );
  }
}

export default Footer;
