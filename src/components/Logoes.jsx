import React, { Component } from "react";
import "../css/style.css";
import { Col, Image, Row } from "react-bootstrap";
import samsung from "../images/assets/Brand/samsung-Logo.jpg";
import apple from "../images/assets/Brand/Apple-Logo.jpg";

class Logoes extends Component {
  render() {
    return (
      <div className="my-3">
        <h2 className="text-center my-5">Who Support US ?!</h2>
        <Row className="my-5 justify-content-center">
          <Col xs={4} sm={3} md={3} lg={3} xl={3} xxl={3}>
            <Image src={apple} fluid />
          </Col>
          <Col xs={4} sm={3} md={3} lg={3} xl={3} xxl={3}>
            <Image src={samsung} fluid />
          </Col>
          <Col xs={4} sm={3} md={3} lg={3} xl={3} xxl={3}>
            <Image src={apple} fluid />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Logoes;
