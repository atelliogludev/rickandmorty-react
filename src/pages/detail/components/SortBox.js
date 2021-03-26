import React from "react";
import { Button } from "react-bootstrap";
import '../detail.css'

export default function SortBox({ item, sortBy }) {
  return (
    <Button className="sort-box" onClick={() => sortBy(item)}>Sort By : {item}</Button>
  );
}
