import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../detail/detail.css";

export default function BottomPagination({ active, total }) {
  let items = [];
  for (let number = 1; number <= total; number++) {
    items.push(
      <Link key={`pagination${number}`} to={"/page/" + number} className="pagination-anchor">
        <div className={number == active ? "pagination pagination-active" : "pagination"}>{number}</div>
      </Link>
    );
  }
  return (
    <Col xs={12}>
      <div className="pagination-wrapper">{items}</div>
    </Col>
  );
}
