import React from 'react';
// import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './index.css'

function Navigation() {
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Home</Navbar.Brand>
          <Navbar.Brand href="#">About</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Navigation;