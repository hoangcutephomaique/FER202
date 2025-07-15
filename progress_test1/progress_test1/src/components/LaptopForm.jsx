import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Button, Form, Alert } from 'react-bootstrap';
import axios from 'axios';

function LaptopForm({ user }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [laptop, setLaptop] = useState(null);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    price: '',
    image: '',
    description: ''
  });

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3000/Laptops/${id}`)
        .then(response => {
          setLaptop(response.data);
          setFormData({
            brand: response.data.brand,
            model: response.data.model,
            year: response.data.year.toString(),
            price: response.data.price,
            image: response.data.image,
            description: response.data.description || ''
          });
        })
        .catch(() => setError('Laptop not found'));
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user?.account_type !== 'admin') {
      setError('Unauthorized action');
      return;
    }
    try {
      if (id) {
        await axios.put(`http://localhost:3000/Laptops/${id}`, {
          ...formData,
          year: parseInt(formData.year)
        });
      } else {
        await axios.post('http://localhost:3000/Laptops', {
          ...formData,
          year: parseInt(formData.year)
        });
      }
      navigate('/laptops');
    } catch {
      setError(id ? 'Failed to update laptop' : 'Failed to add laptop');
    }
  };

  if (!user || user.account_type !== 'admin') return <Alert variant="danger">Unauthorized access</Alert>;
  if (id && error) return <Alert variant="danger">{error}</Alert>;
  if (id && !laptop) return <div>Loading...</div>;

  return (
    <Container className="my-5">
      <Button variant="secondary" onClick={() => navigate('/laptops')} className="mb-3">
        Back to List
      </Button>
      <LaptopFormCard formData={formData} onInputChange={handleInputChange} onSubmit={handleSubmit} error={error} isEdit={!!id} />
    </Container>
  );
}

function LaptopFormCard({ formData, onInputChange, onSubmit, error, isEdit }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{isEdit ? 'Edit Laptop' : 'Add Laptop'}</Card.Title>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              type="text"
              name="brand"
              value={formData.brand}
              onChange={onInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Model</Form.Label>
            <Form.Control
              type="text"
              name="model"
              value={formData.model}
              onChange={onInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Year</Form.Label>
            <Form.Control
              type="number"
              name="year"
              value={formData.year}
              onChange={onInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              name="price"
              value={formData.price}
              onChange={onInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={formData.image}
              onChange={onInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={formData.description}
              onChange={onInputChange}
            />
          </Form.Group>
          <Button type="submit" variant="primary">{isEdit ? 'Update Laptop' : 'Add Laptop'}</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

LaptopForm.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    password: PropTypes.string,
    account_type: PropTypes.string,
    status: PropTypes.string
  })
};

LaptopFormCard.propTypes = {
  formData: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string
  }).isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  isEdit: PropTypes.bool.isRequired
};

export default LaptopForm;