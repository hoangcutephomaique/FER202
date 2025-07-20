import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServices } from '../redux/service/serviceThunk';
import { addToCart } from '../redux/cart/cartSlice';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

export default function ServiceList() {
  const dispatch = useDispatch();
  const { items: services, loading } = useSelector(state => state.services);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  return (
    <Container className="my-5">
      <h2 className="mb-4">Dịch vụ hiện có</h2>

      {loading ? (
        <p>Đang tải dịch vụ...</p>
      ) : (
        <Row>
          {services.map(service => (
            <Col md={4} key={service.id} className="mb-4">
              <Card className="h-100 bg-dark text-white shadow-sm">
                {service.image && (
                  <Card.Img
                    variant="top"
                    src={service.image}
                    height={200}
                    style={{ objectFit: 'cover' }}
                  />
                )}
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{service.name}</Card.Title>
                  <Card.Text>
                    <strong className="text-warning">{service.price} VND</strong>
                  </Card.Text>
                  <Card.Text>Số lượng còn: {service.quantity}</Card.Text>

                  <div className="mt-auto">
                    <Button
                      variant="outline-light"
                      disabled={service.quantity === 0}
                      onClick={() => dispatch(addToCart(service))}
                    >
                      {service.quantity === 0 ? 'Hết hàng' : 'Thêm vào giỏ'}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}
