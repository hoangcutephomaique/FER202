import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LaptopList({ user }) {
  const [laptops, setLaptops] = useState([]);
  const [allLaptops, setAllLaptops] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/Laptops')
      .then(response => {
        setLaptops(response.data);
        setAllLaptops(response.data); 
      })
      .catch(() => setError('Failed to fetch laptops'));
  }, []);

 const handleSearch = (e) => {
  e.preventDefault();
  if (!searchTerm.trim()) {
    // Nếu searchTerm rỗng, load lại toàn bộ danh sách
    axios.get('http://localhost:3000/Laptops')
      .then(response => setLaptops(response.data))
      .catch(() => setError('Error fetching laptops'));
    return;
  }

  // Tìm kiếm không phân biệt hoa thường
  const searchLower = searchTerm.toLowerCase();
  const filtered = laptops.filter(laptop => 
    laptop.model.toLowerCase().includes(searchLower) ||
    laptop.brand.toLowerCase().includes(searchLower)
  );
  
  setLaptops(filtered);
};

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/Laptops/${id}`);
      setLaptops(laptops.filter(laptop => laptop.id !== id));
    } catch {
      setError('Failed to delete laptop');
    }
  };

  return (
    <Container className="my-5">
      <h2>Laptop Management</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSearch} className="mb-4">
        <Form.Group className="mb-3">
          <Form.Label>Search by Model</Form.Label>
          <Form.Control
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter laptop model"
          />
        </Form.Group>
        <Button type="submit" variant="primary">Search</Button>
      </Form>
      {user?.account_type === 'admin' && (
        <Button as={Link} to="/laptops/add" variant="success" className="mb-4">
          Add Laptop
        </Button>
      )}
      <Row>
        {laptops.map(laptop => (
          <LaptopItem key={laptop.id} laptop={laptop} user={user} onDelete={handleDelete} />
        ))}
      </Row>
    </Container>
  );
}

function LaptopItem({ laptop, user, onDelete }) {
  return (
    <Col md={4} className="mb-4">
      <Card className='h-100'>
        <Card.Img variant="top" src={laptop.image} alt={laptop.model} />
        <Card.Body>
          <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
          <Card.Text>Year: {laptop.year}</Card.Text>
          <Card.Text>Price: {laptop.price}</Card.Text>
          <Button as={Link} to={`/laptops/${laptop.id}`} variant="info" className="me-2">
            View Details
          </Button>
          {user?.account_type === 'admin' && (
            <>
              <Button as={Link} to={`/laptops/edit/${laptop.id}`} variant="warning" className="me-2">
                Edit
              </Button>
              <Button variant="danger" onClick={() => onDelete(laptop.id)}>
                Delete
              </Button>
            </>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}

LaptopList.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    password: PropTypes.string,
    account_type: PropTypes.string,
    status: PropTypes.string
  })
};

LaptopItem.propTypes = {
  laptop: PropTypes.shape({
    id: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    password: PropTypes.string,
    account_type: PropTypes.string,
    status: PropTypes.string
  }),
  onDelete: PropTypes.func.isRequired
};

export default LaptopList;