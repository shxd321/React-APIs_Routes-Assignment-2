
import React, { useState, useEffect } from "react";
import { useParams , useNavigate } from "react-router-dom";
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Row, Spinner } from "reactstrap";
export default function AlbumDetail() {
    const [loading, setLoading] = useState(false);
    const [photoLists, setPhotoLists] = useState([]);
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/photos?albumId="+id)
          .then((data) => data.json())
          .then((data) => {
            setLoading(false);
            setPhotoLists(data);
            console.log(data);
          })
    
          .catch((error) => {
            setLoading(false);
            console.log(error);
          });
      }, []);
  return (
   
        <Container fluid>
      <h3>Album Details</h3>
      {loading ? <Spinner color="primary"></Spinner> : null}
      <Row>
        {photoLists.map((item,index)=>(
          <Col key={`${index}`}  xs="12" sm="4">
          <Card>
            <img alt="Sample" src={item.thumbnailUrl} />
            <CardBody>
              <CardTitle tag="h5">{item.title}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {item.id}
              </CardSubtitle>
             
            </CardBody>
          </Card>
        </Col>
        ))}
        
      </Row>
    </Container>
   
  )
}