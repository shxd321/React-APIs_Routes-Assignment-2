import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
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
export default function Posts() {
  const [loading, setLoading] = useState(false);
  const [postsLists, setPostsLists] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => {
        setLoading(false);
        setPostsLists(data);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  // Accordion usestate and Function
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
      <Container fluid>
      {loading ? <Spinner color="primary"></Spinner> : null}
      <Row>
      <h2>Posts</h2>
        
        {postsLists.map((item, i) => (
          <Col  sm="4">
           <Card body>
                 <CardTitle tag="h5">
                 {item.id}
                 </CardTitle>
                 <CardText>
                 {item.title}
                 </CardText>
               </Card>
          </Col>
        ))}
</Row>
      </Container>
);
}
