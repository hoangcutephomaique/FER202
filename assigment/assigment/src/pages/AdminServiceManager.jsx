import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServices, addService, updateService, deleteService } from '../redux/service/serviceThunk';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import ServiceCard from '../components/ServiceCard';

export default function AdminServiceManager() {
  const dispatch = useDispatch();
  const services = useSelector(state => state.services.items);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: '', price: '', image: '', quantity: '' });

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const handleShow = (service = null) => {
    if (service) {
      setEditing(service.id);
      setForm(service);
    } else {
      setEditing(null);
      setForm({ name: '', price: '', image: '' });
    }
    setShowModal(true);
  };

  const handleSave = () => {
    const data = { ...form, price: Number(form.price), quantity: Number(form.quantity) };
    if (editing) dispatch(updateService({ id: editing, data }));
    else dispatch(addService(data));
    setShowModal(false);
  };

  return (
    <Container className="my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Quản lý Dịch vụ</h2>
        <Button variant="success" onClick={() => handleShow()}>+ Thêm dịch vụ</Button>
      </div>
      <Row>
        {services.map(service => (
          <Col md={4} key={service.id} className="mb-4">
            <ServiceCard
              service={service}
              isAdmin
              onEdit={() => handleShow(service)}
              onDelete={() => dispatch(deleteService(service.id))}
            />
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editing ? 'Sửa dịch vụ' : 'Thêm dịch vụ'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {['name', 'price', 'image', 'quantity'].map(field => (
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
