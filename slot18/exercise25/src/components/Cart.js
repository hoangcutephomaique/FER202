import { useSelector } from 'react-redux';
import { Card, Col, Row } from 'react-bootstrap';

function Cart() {
  const cart = useSelector(state => state.cart);

  return (
    <div className="mt-4">
      <h3>Cart</h3>
      <Row>
        {cart.map((item, idx) => (
          <Col key={idx} md={4}>
            <Card className="mb-2">
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>${item.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Cart;
