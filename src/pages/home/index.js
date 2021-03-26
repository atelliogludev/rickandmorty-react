import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getHomeData } from "../../services/home";
import ListItem from "./components/ListItem";
import BottomPagination from "./components/BottomPagination";


export default function Home(props) {
  const [listData, setListData] = useState({info:null,results:[]});
  const pageNumber = props.match.params.id;
  useEffect(() => {
    
    const a = getHomeData(pageNumber);
    a.then((data) => setListData(data));
  }, [props]);

  return (
    <div>
      <Container >
        <Row>
            {listData.results.map((item) => (
            <Col lg={6} xs={12}  key={`episode${item.id}`} >
            <ListItem
            id={item.id}
            key={item.episode + "card"}
            name={item.name}
            airDate={item.air_date}
            episode={item.episode}
          /></Col>
          
        ))}
        <BottomPagination active={pageNumber ? pageNumber : 1} total={3} />
        </Row>
        
      </Container>
    </div>
  );
}
