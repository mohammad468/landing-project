import React, { Component } from "react";
import "../css/style.css";
import { Button, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

class MyCard extends Component {
  render() {
    const { image, cost, name, detail } = this.props;
    return (
      <Col className="my-3">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text className="text-end">{detail}</Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <Button variant="primary">Buy Now</Button>
              <h5>{cost}</h5>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default MyCard;
