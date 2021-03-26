import React from "react";
import { Container, Row } from "react-bootstrap";
import "../detail/detail.css";

export default function Footer() {
  return (
    <Container fluid>
      <Row>
          <div className="footer">
            <p>Ahmet Tellioğlu Bitexen Task</p>
          </div>
      </Row>
    </Container>
  );
}
