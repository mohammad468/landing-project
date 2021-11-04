import React, { Component } from "react";
import "../css/style.css";
import { Button, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Badge } from "react-bootstrap";

class MyCard extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  upDownHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  render() {
    const { image, cost, name, detail } = this.props;
    const { counter } = this.state;
    return (
      <Col className="my-2">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text className="text-end">{detail}</Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <Button variant="primary" onClick={this.upDownHandler}>
                Buy Now
              </Button>
              <h4>
                <Badge bg="danger">{counter}</Badge>
              </h4>
              <h5>{cost}</h5>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default MyCard;
