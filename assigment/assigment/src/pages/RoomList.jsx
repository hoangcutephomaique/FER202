import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRooms } from '../redux/room/roomThunk';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function RoomList() {
  const { items } = useSelector(state => state.rooms);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRooms());
  }, []);

  return (
    <Container className="my-4">
      <h2>Danh sách phòng</h2>
      <Row>
        {items.map(room => (
          <Col  md={4} key={room.id} className="mb-4">
           <Card className="h-100  bg-dark text-white shadow-sm">
                 <Card.Img variant="top" src={room.image} style={{ height: '200px', objectFit: 'cover' }} />
                 <Card.Body>
                   <Card.Title>{room.name}</Card.Title>
                   <Card.Text>{room.description}</Card.Text>
                   <Card.Text>
                     <del>{room.price} VND</del><br />
                     <strong>{room.currentPrice} VND</strong>
                   </Card.Text>
                   <Link to={`/room/${room.id}`}>
                     <Button variant="primary">Xem chi tiết</Button>
                   </Link>
                 </Card.Body>
               </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
