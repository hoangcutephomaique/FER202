import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

function LaptopDetail({ user }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [laptop, setLaptop] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/Laptops/${id}`)
      .then(response => setLaptop(response.data))
      .catch(() => setError('Laptop not found'));
  }, [id]);

  if (error) return <Alert variant="danger">{error}</Alert>;
  if (!laptop) return <div>Loading...</div>;

  return (
    <Container className="my-5">
      <Button variant="secondary" onClick={() => navigate('/laptops')} className="mb-3">
        Back to List
      </Button>
      <LaptopDetailCard laptop={laptop} user={user} />
    </Container>
  );
}

function LaptopDetailCard({ laptop, user }) {
  return (
    <Card>
      <Card.Img 
        variant="top" 
        src={laptop.image} 
        alt={laptop.model}
        style={{
          width: '50%', // Chỉnh width theo % hoặc px
          height: 'auto',
          margin: '0 auto', // Căn giữa
          padding: '10px',
          objectFit: 'contain' // Đảm bảo hình không bị méo
        }}
      />
      <Card.Body>
        <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
        <Card.Text>Year: {laptop.year}</Card.Text>
        <Card.Text>Price: {laptop.price}</Card.Text>
        <Card.Text>Description: {laptop.description || 'No description available'}</Card.Text>
        {user?.account_type === 'admin' && (
          <Button as={Link} to={`/laptops/edit/${laptop.id}`} variant="warning">
            Edit Laptop
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

LaptopDetail.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    password: PropTypes.string,
    account_type: PropTypes.string,
    status: PropTypes.string
  })
};

LaptopDetailCard.propTypes = {
  laptop: PropTypes.shape({
    id: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string
  }).isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    password: PropTypes.string,
    account_type: PropTypes.string,
    status: PropTypes.string
  })
};

export default LaptopDetail;