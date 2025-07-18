import { Button, Card, Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';

const products = [
  { id: 1, name: 'iPhone', price: 1000 },
  { id: 2, name: 'Samsung', price: 800 }
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <Row>
      {products.map(p => (
        <Col md={4} key={p.id}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>{p.name}</Card.Title>
              <Card.Text>Giá: ${p.price}</Card.Text>
              <Button onClick={() => dispatch(addToCart(p))}>Thêm vào giỏ</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ProductList;