import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../detail/detail.css'

export default function ListItem({ id, name, airDate, episode }) {
  return (
    <Link to={"/detail/" + id}>
      <Card className="card-body">
        <Card.Body className="card-body-index" >
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{airDate}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{episode}</Card.Subtitle>
        </Card.Body>
      </Card>
    </Link>
  );
}
