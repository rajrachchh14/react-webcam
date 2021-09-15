import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function TopBar() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Webcode</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Video</Nav.Link>
            <Nav.Link href="#pricing">Chat</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
