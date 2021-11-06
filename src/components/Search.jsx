import React, { Component } from "react";
import "../css/style.css";
import { Col, Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Badge } from "react-bootstrap";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }
  changeHandler = (event) => {
    this.setState({
      text: event.target.value,
    });
  };
  render() {
    return (
      <div className="py-5 bg-primary">
        <Container>
          <div className="d-flex justify-content-evenly">
            <h3 className="text-light">Search What You Want</h3>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={this.state.text}
                onChange={this.changeHandler}
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </div>
          <Col
            lg={8}
            md={8}
            sm={8}
            xs={8}
            xl={8}
            xll={8}
            className="d-flex justify-content-end pe-3 pe-md-4 mt-1"
          >
            <h4>
              <Badge bg="danger">{this.state.text}</Badge>
            </h4>
          </Col>
        </Container>
      </div>
    );
  }
}

export default Search;
