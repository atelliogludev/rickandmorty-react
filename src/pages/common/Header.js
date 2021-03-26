import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../detail/detail.css";

export default function Header() {
  return (
    <Container fluid className="header-home bg-light">
      <Container >
        <Navbar expand="lg">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to={"/"}>
              Episodes
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </Container>
  );
}
