import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getDetailData } from "../../services/detail";
import getCharacters from "../../services/detail/getCharacters";

import Characters from "./components/Characters";

export default function Detail(props) {
  const [data, setData] = useState(null);
  const [characters, setCharacters] = useState([]);

  const pageId = props.match.params.id;

  useEffect(() => {
    getDetailData(pageId).then((data) => setData(data));
  }, []);

  useEffect(() => {
    if (data !== null)
      getCharacters(data.characterIds).then((charactersInfo) =>
        setCharacters(charactersInfo)
      );
  }, [data]);

  if (data === null) return <div>Yükleniyor</div>;

  return (
    <Container>
      <h1>{data.name}</h1>
      <h3>{data.air_date}</h3>
      <h3>{data.episode}</h3>
      <Characters data={characters} />
    </Container>
  );
}
