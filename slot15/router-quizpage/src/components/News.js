import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import newsData from '../data/news.json';

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(newsData);
  }, []);

  return (
    <div>
        <h2 className="text-danger mt-3">New Category</h2>

 <Row xs={1} md={2} lg={3} className="g-4">
        
      {news.map(item => (
        
        <Col key={item.id}>
            
          <Card>
            
            <Card.Img variant="top" src={item.images} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
   
  );
}

export default News;
