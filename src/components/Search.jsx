import React, { Component } from "react";
import "../css/style.css";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";

class Search extends Component {
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
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </div>
        </Container>
      </div>
    );
  }
}

export default Search;
