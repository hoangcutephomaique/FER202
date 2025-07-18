import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts, addToCart } from '../redux/actions';
import { Card, Button, Spinner, Row, Col, Alert } from 'react-bootstrap';

function ProductList() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Row className="mt-4">
      {products.map((p) => (
        <Col key={p.id} md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>{p.name}</Card.Title>
              <Card.Text>{p.description}</Card.Text>
              <Card.Text>Price: ${p.price}</Card.Text>
              <Button onClick={() => dispatch(addToCart(p))}>Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ProductList;
