import React, { Component } from "react";
import axios from "axios";
import MyCard from "./MyCard";
import { Container, Row, Spinner } from "react-bootstrap";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios.get("https://fakestoreapi.com/products/").then((response) =>
      this.setState({
        products: response.data,
      })
    );
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            {this.state.products.length ? (
              this.state.products.map((product) => (
                <MyCard
                  image={product.image}
                  name={product.title}
                  cost={product.price}
                  detail={product.category}
                  key={product.id}
                  xs={12}
                />
              ))
            ) : (
              <div className="myspinner d-flex justify-content-center align-items-center">
                <Spinner animation="grow" variant="primary" />
              </div>
            )}
          </Row>
        </Container>
      </div>
    );
  }
}
