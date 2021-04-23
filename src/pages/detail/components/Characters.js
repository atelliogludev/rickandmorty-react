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
    setFilteredCharacters([...filteredCharacters ]);
    }, [sortBy]);

  useEffect(() => {
    setProperties(getPropertyOptions(data));
    setFilteredCharacters(data);
  }, [data]);

  useEffect(() => {
    //['species','gender']
    let selectedKeys = Object.keys(selecteds);
    if (selectedKeys.length > 0) {
      //data : tüm karakterler
      //item : tek karakter Burada Karakter datalarını tek tek iterate ediyor
      let tempFilteredData = data.filter((item) => {
        //selectedKeys : selected state'inde bulunan keyler (örn: ['species', 'gender'])
        //key : selected state'indeki sırası gelen key 'gender'
        let filteredKeys = selectedKeys.filter((key) => {
          //Eğer selecteds state'inde bu keye (örn: 'gender') "All" değeri atandıysa, filter'a true dön
          if (selecteds[key] === "All") return true;
          //Eğer selecteds state'inde bu keye (örn: 'gender') atanan değer (örn: 'Male') ile
          //karakter'in keyini (örn: 'gender') karşılaştır
          return item[key] === selecteds[key];
        });

        //Yukardeki filteredKeys Filtresi sonucunda bütün selected filtrelerinden karakter
        //true döndürdüyse, selectedKeys ile aynı uzunlukta bir array oluşacak
        return filteredKeys.length === selectedKeys.length;
      });
      setFilteredCharacters(tempFilteredData);
    }
  }, [selecteds]);

  const setFromChild = (property, value) => {
    // setSelecteds({species: 'human', gender: 'male', gender: 'female'})
    setSelecteds({ ...selecteds, [property]: value });
  };

  return (
    <Row>
      <Col xs={12}>
        <Row>
          {
            //properties "spices,gender,status vb" her biri için selectbox oluşturuldu
            Object.keys(properties).map((item) => (
              <Col lg={2} xs={6} key={`selectbox${item}`}>
                <SelectBox
                /* burdaki propertyKey spices,gender vb */ 
                  propertyKey={item}
                  setFromChild={setFromChild}
                  options={
                    properties[
                      item
                    ] /* dönen keyin "spices,gender" valuesi olan array "female,male gibi" */
                  }
                  selected={
                    // selecteds ta ise eğer bir key seçili ise gender spices vb bunun değeri "male female tek bir value"
                    // eğer değer yoksa item olarak sadece keyi gidiyor örn gender
                    selecteds[item] !== undefined ? selecteds[item] : item
                  }
                />
              </Col>
            ))
          }
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
              <Col lg={2} xs={6} key={`character${item.id}`}>
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
