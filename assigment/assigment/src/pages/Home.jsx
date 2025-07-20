import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms } from '../redux/room/roomThunk';
import { fetchServices } from '../redux/service/serviceThunk';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CarouselBanner from '../components/CarouselBanner';
import RoomCard from '../components/RoomCard';
import { addToCart } from '../redux/cart/cartSlice';
export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items: rooms } = useSelector(state => state.rooms);
  const { items: services } = useSelector(state => state.services);

  useEffect(() => {
    dispatch(fetchRooms());
    dispatch(fetchServices());
  }, [dispatch]);

  return (
    <>
      <CarouselBanner />

      <Container className="my-5 text-center">
        <h1>Chào mừng đến với Homestay</h1>
        <p className="text-muted">Trải nghiệm không gian nghỉ dưỡng hiện đại & tiện nghi</p>
      </Container>

      <Container className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3>Phòng nổi bật</h3>
          <Button variant="outline-light" onClick={() => navigate('/rooms')}>Xem tất cả</Button>
        </div>
        <Row >
          {rooms.slice(0, 3).map(room => (
            <Col md={4} key={room.id}>
              <RoomCard room={room} />
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="mb-5">
  <div className="d-flex justify-content-between align-items-center mb-3">
    <h3>🛎️ Dịch vụ phổ biến</h3>
    <Button variant="outline-light" onClick={() => navigate('/services')}>Xem tất cả</Button>
  </div>
  <Row>
    {services.slice(0, 3).map(service => (
      <Col md={4} key={service.id} className="mb-4">
        <div className="card h-100 bg-dark text-white shadow-sm">
          {service.image && (
            <img
              src={service.image}
              alt={service.name}
              className="card-img-top"
              style={{ height: '200px', objectFit: 'cover' }}
            />
          )}
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{service.name}</h5>
            <p className="card-text text-warning fw-bold">{service.price} VND</p>
            <p className="card-text text-light">Còn lại: {service.quantity ?? 0}</p>
            <Button
              variant="outline-light"
              disabled={service.quantity === 0}
              onClick={() => dispatch(addToCart(service))}
            >
              {service.quantity === 0 ? 'Hết hàng' : 'Thêm vào giỏ'}
            </Button>
          </div>
        </div>
      </Col>
    ))}
  </Row>
</Container>
    </>
  );
}
