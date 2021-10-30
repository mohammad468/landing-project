import React from 'react';
import '../css/style.css';
import { Container, Navbar } from 'react-bootstrap';

const myNavbar = () => {
  return (
    <div>
      <Navbar className="nav-bg">
          <Container>
              <Navbar.Brand href="#">Home</Navbar.Brand>
          </Container>
      </Navbar>
    </div>
  );
};

export default myNavbar;
