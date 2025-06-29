import React from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Image, 
  Card, 
  Button,
  Badge
} from 'react-bootstrap';
import { FaLeaf, FaUtensils, FaHeart, FaAward } from 'react-icons/fa';

function About() {
  return (
    <Container className="my-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h2 className="display-4 fw-bold text-primary">About Our Food Journey</h2>
        <p className="lead text-muted">Discover the passion behind every dish we create</p>
      </div>

      {/* Main Content Card */}
      <Card className="mb-5 border-0 shadow-lg overflow-hidden">
        <Row className="g-0">
          <Col md={6} className="position-relative">
            <Image 
              src="/images/banner2.jpg" 
              alt="Healthy food" 
              fluid 
              className="h-100 object-fit-cover"
            />
            <div className="position-absolute bottom-0 start-0 p-3 bg-dark bg-opacity-75 text-white w-100">
              <h4 className="mb-0">Fresh Ingredients</h4>
            </div>
          </Col>
          <Col md={6} className="p-4 d-flex align-items-center">
            <div>
              <Badge bg="warning" className="mb-3 fs-6">Since 2010</Badge>
              <h3 className="fw-bold mb-4">Our Culinary Story</h3>
              <p className="lead mb-4">
                This demo application showcases how we combine technology and gastronomy to create 
                interactive food experiences. Built with React and React-Bootstrap, it demonstrates 
                modern web development techniques.
              </p>
              <div className="d-flex gap-3 mb-4">
                <div className="text-center">
                  <FaLeaf className="text-success fs-3 mb-2" />
                  <h5 className="mb-0">Organic</h5>
                </div>
                <div className="text-center">
                  <FaUtensils className="text-danger fs-3 mb-2" />
                  <h5 className="mb-0">Creative</h5>
                </div>
                <div className="text-center">
                  <FaHeart className="text-primary fs-3 mb-2" />
                  <h5 className="mb-0">Passionate</h5>
                </div>
              </div>
              <Button variant="outline-primary" size="lg">Meet Our Chefs</Button>
            </div>
          </Col>
        </Row>
      </Card>

      {/* Gallery Section */}
      <h3 className="text-center mb-4 fw-bold">Our Food Gallery</h3>
      <Row className="g-4 mb-5">
        <Col md={4}>
          <Card className="h-100 border-0 shadow-sm overflow-hidden">
            <Image 
              src="/images/gallery1.jpg" 
              alt="Food 1" 
              fluid 
              className="object-fit-cover"
              style={{ height: '250px' }}
            />
            <Card.Body className="text-center">
              <FaAward className="text-warning mb-2" />
              <Card.Title>Signature Dishes</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 border-0 shadow-sm overflow-hidden">
            <Image 
              src="/images/gallery2.jpg" 
              alt="Food 2" 
              fluid 
              className="object-fit-cover"
              style={{ height: '250px' }}
            />
            <Card.Body className="text-center">
              <FaAward className="text-warning mb-2" />
              <Card.Title>Seasonal Specials</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 border-0 shadow-sm overflow-hidden">
            <Image 
              src="/images/gallery3.jpg" 
              alt="Food 3" 
              fluid 
              className="object-fit-cover"
              style={{ height: '250px' }}
            />
            <Card.Body className="text-center">
              <FaAward className="text-warning mb-2" />
              <Card.Title>Chef's Selection</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Full-width Banner */}
      <Card className="border-0 shadow mb-5">
        <Image 
          src="/images/banner3.jpg" 
          alt="BBQ food" 
          fluid 
          style={{ maxHeight: '400px', objectFit: 'cover' }}
        />
        <Card.ImgOverlay className="d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
          <div className="text-white text-center">
            <h2 className="display-5 fw-bold">Taste the Difference</h2>
            <Button variant="light" size="lg" className="mt-3">View Menu</Button>
          </div>
        </Card.ImgOverlay>
      </Card>

      {/* Team Section */}
      <h3 className="text-center mb-4 fw-bold">Our Culinary Team</h3>
      <Row className="g-4">
        <Col md={3}>
          <Card className="border-0 text-center">
            <Image 
              src="/images/chef1.jpg" 
              roundedCircle 
              className="mx-auto my-3"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>Chef Maria</Card.Title>
              <Card.Text className="text-muted">Head Chef</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="border-0 text-center">
            <Image 
              src="/images/chef2.jpg" 
              roundedCircle 
              className="mx-auto my-3"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>Chef Antonio</Card.Title>
              <Card.Text className="text-muted">Pastry Chef</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="border-0 text-center">
            <Image 
              src="/images/chef3.jpg" 
              roundedCircle 
              className="mx-auto my-3"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>Chef Sophia</Card.Title>
              <Card.Text className="text-muted">Sous Chef</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="border-0 text-center">
            <Image 
              src="/images/chef4.jpg" 
              roundedCircle 
              className="mx-auto my-3"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>Chef Marco</Card.Title>
              <Card.Text className="text-muted">Grill Master</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;