import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ProductForm() {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: '',
    description: '',
    catalogs: ''
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formatted = {
      ...product,
      price: parseFloat(product.price),
      catalogs: product.catalogs.split(',').map(c => c.trim())
    };
    dispatch(addProduct(formatted));
    navigate('/');
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-4">
      <Form.Group className="mb-2">
        <Form.Label>ID</Form.Label>
        <Form.Control type="text" name="id" value={product.id} onChange={handleChange} required />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={product.name} onChange={handleChange} required />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" name="price" value={product.price} onChange={handleChange} required />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" name="description" value={product.description} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Catalogs (comma-separated)</Form.Label>
        <Form.Control type="text" name="catalogs" value={product.catalogs} onChange={handleChange} />
      </Form.Group>
      <Button type="submit">Add Product</Button>
    </Form>
  );
}

export default ProductForm;
