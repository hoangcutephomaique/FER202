import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms, addRoom, updateRoom, deleteRoom } from '../redux/room/roomThunk';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import RoomCard from '../components/RoomCard';

export default function AdminRoomManager() {
  const dispatch = useDispatch();
  const rooms = useSelector(state => state.rooms.items);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({
    name: '', description: '', price: '', currentPrice: '', image: ''
  });

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  const handleShow = (room = null) => {
    if (room) {
      setEditing(room.id);
      setForm(room);
    } else {
      setEditing(null);
      setForm({ name: '', description: '', price: '', currentPrice: '', quantity: '', image: '' });
    }
    setShowModal(true);
  };

  const handleSave = () => {
    const data = { ...form };
    if (editing) dispatch(updateRoom({ id: editing, data }));
    else dispatch(addRoom(data));
    setShowModal(false);
  };

  return (
    <Container className="my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Quản lý Phòng</h2>
        <Button variant="success" onClick={() => handleShow()}>+ Thêm phòng</Button>
      </div>
      <Row>
        {rooms.map(room => (
          <Col md={4} key={room.id} className="mb-4">
            <RoomCard
              room={room}
              isAdmin
              onEdit={() => handleShow(room)}
              onDelete={() => dispatch(deleteRoom(room.id))}
            />
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editing ? 'Sửa phòng' : 'Thêm phòng'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {['name', 'description', 'price', 'currentPrice', 'image'].map(field => (
              <Form.Group key={field} className="mb-2">
                <Form.Label>{field}</Form.Label>
                <Form.Control
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                />
              </Form.Group>
            ))}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Hủy</Button>
          <Button variant="primary" onClick={handleSave}>Lưu</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
