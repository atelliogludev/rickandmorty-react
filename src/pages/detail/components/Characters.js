import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import getPropertyOptions from "../../../services/detail/getPropertyOptions";
import SelectBox from "./SelectBox";
import "../detail.css";
import SortBox from "./SortBox";

export default function Characters({ data }) {
  const [filteredCharacters, setFilteredCharacters] = useState(data);
  const [properties, setProperties] = useState({});
  const [selecteds, setSelecteds] = useState({});
  const [sortBy, setSortBy] = useState(null);

  useEffect(() => {
    filteredCharacters.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    console.log(filteredCharacters);
    setFilteredCharacters(JSON.parse(JSON.stringify(filteredCharacters)));
  }, [sortBy]);

  useEffect(() => {
    setProperties(getPropertyOptions(data));
    setFilteredCharacters(data);
  }, [data]);

  useEffect(() => {
    let selectedKeys = Object.keys(selecteds);
    if (selectedKeys.length > 0) {
      let tempFilteredData = data.filter((item) => {
        let filteredKeys = selectedKeys.filter((key) => {
          if (selecteds[key] === "All") return true;
          return item[key] === selecteds[key];
        });
        return filteredKeys.length === selectedKeys.length;
      });
      setFilteredCharacters(tempFilteredData);
    }
  }, [selecteds]);

  const setFromChild = (property, value) => {
    setSelecteds({ ...selecteds, [property]: value });
  };

  return (
    <Row>
      <Col xs={12}>
        <Row>
          {Object.keys(properties).map((item) => (
            <Col lg={2} xs={6} key={`selectbox${item}`}>
              <SelectBox
                propertyKey={item}
                setFromChild={setFromChild}
                options={properties[item]}
                selected={
                  selecteds[item] !== undefined ? selecteds[item] : item
                }
              />
            </Col>
          ))}
        </Row>
        <Row>
          {Object.keys(properties).map((item) => (
            <Col lg={2} xs={6}>
              <SortBox item={item} sortBy={setSortBy} />
            </Col>
          ))}
        </Row>

        <Row className="characters-row">
          {filteredCharacters.map((item) => {
            return (
              <Col lg={2} xs={6} key={`character${item.id}`} >
                <Link className="character-link" to={`/character/${item.id}`}>
                  <p className="characters-name">
                    <img style={{ maxWidth: "100%" }} src={item.image}></img>
                    <span>{item.name}</span>
                  </p>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
}
