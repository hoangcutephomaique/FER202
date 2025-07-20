import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServices } from '../redux/service/serviceThunk';
import { addToCart } from '../redux/cart/cartSlice';
import axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';

export default function RoomDetail() {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const dispatch = useDispatch();
  const { items: services, loading } = useSelector(state => state.services);

  useEffect(() => {
    axios.get(`http://localhost:3000/rooms/${id}`).then(res => setRoom(res.data));
    dispatch(fetchServices());
  }, [id, dispatch]);

  if (!room) return <div className="text-center my-5">Đang tải thông tin phòng...</div>;

  return (
    <Container className="my-5">
      <Card className="mb-4">
        <Card.Img variant="top" src={room.image} style={{ maxHeight: '350px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{room.name}</Card.Title>
          <Card.Text>{room.description}</Card.Text>
          <Card.Text>
            <del>{room.price} VND</del> <strong>{room.currentPrice} VND</strong>
          </Card.Text>
        </Card.Body>
      </Card>

      <h4>Dịch vụ tuỳ chọn</h4>
      {loading ? (
        <div>Đang tải dịch vụ...</div>
      ) : (
        services.map(service => (
          <Card key={service.id} className="mb-2">
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div>
                <strong>{service.name}</strong> - {service.price} VND
              </div>
              <Button
                variant="outline-success"
                onClick={() => dispatch(addToCart({ ...service }))}
              >
                Thêm dịch vụ
              </Button>
            </Card.Body>
          </Card>
        ))
      )}
    </Container>
  );
}
