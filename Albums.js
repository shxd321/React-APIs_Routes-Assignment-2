import React, { useState, useEffect  } from "react";
import {useNavigate , Link} from 'react-router-dom'
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
  Spinner,
} from "reactstrap";

function Albums() {
  const [loading, setLoading] = useState(false);
  const [albumsLists, setAlbumsLists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((data) => data.json())
      .then((data) => {
        console.log("datattatta", data);
        setLoading(false);
        setAlbumsLists(data);
        console.log(data);
      })

      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  const handleClick = (id) =>{
    // alert(id)
    navigate("/albumDetail/"+id);
  }
  return (
    <Container fluid>
      <h2>Albums</h2>
      {loading ? <Spinner color="primary"></Spinner> : null}
      <Row>
        {albumsLists.map((item,index)=>(
          <Col key={`${index}`}  xs="12" sm="4">
          <Card onClick={()=>handleClick(item.id)}>
            <img alt="Sample" src={`https://picsum.photos/300/20${index}`} />
            <CardBody>
              <CardTitle tag="h5">{item.title}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card‘s content.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        ))}
        
      </Row>
      
    </Container>
  );
}

export default Albums;
