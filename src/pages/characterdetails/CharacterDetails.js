import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { getCharacterDetails } from "../../services/characterdetails/getCharacterDetails";

export default function CharacterDetails(props) {
  const characterId = props.match.params.id;

  const [data, setData] = useState(null);

  useEffect(() => {
    getCharacterDetails(characterId).then((result) => {
      setData(result);
    });
  }, []);

  if (data === null) {
    return <div>Yükleniyor</div>;
  }

  return (
    <Container>
      <Row>
        <Col lg={{span: 4, offset: 4}} xs={{span: 12}}>
          <Card>
            <Card.Img src={data.image}></Card.Img>
            <Card>
              <Card.Body>
                <Card.Title>Name : {data.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Status : {data.status}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  Species : {data.species}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  Status : {data.status}
                </Card.Subtitle>

                {data.type !== "" && (
                  <Card.Subtitle className="mb-2 text-muted">
                    Type : {data.type}
                  </Card.Subtitle>
                )}
                <Card.Subtitle className="mb-2 text-muted">
                  Gender : {data.gender}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  Origin :{data.origin.name}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
