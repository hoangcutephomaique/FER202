import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart/cartSlice';
import { reduceServiceQuantity } from '../redux/service/serviceThunk';

export default function ServiceCard({ service, isAdmin = false, onEdit, onDelete }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (service.quantity > 0) {
      // Thêm vào giỏ hàng với quantity = 1
      dispatch(addToCart({ type: 'service', item: { ...service, quantity: 1 } }));

      // Giảm số lượng trong Redux + JSON Server
      dispatch(reduceServiceQuantity(service.id));
    } else {
      alert('Dịch vụ này đã hết hàng!');
    }
  };

  return (
    <Card className="h-100 bg-secondary text-white shadow-sm">
      {service.image && (
        <Card.Img
          variant="top"
          src={service.image}
          alt={service.name}
          style={{ height: '200px', objectFit: 'cover' }}
        />
      )}
      <Card.Body>
        <Card.Title>{service.name}</Card.Title>
        <Card.Text className="fw-bold text-warning">{service.price.toLocaleString()} VND</Card.Text>

        {typeof service.quantity === 'number' && (
          <>
            <Card.Text className="text-white">Số lượng còn lại: {service.quantity}</Card.Text>
            {service.quantity === 0 && <Card.Text className="text-danger">Hết hàng</Card.Text>}
          </>
        )}

        {isAdmin ? (
          <>
            <Button size="sm" variant="warning" className="me-2" onClick={onEdit}>
              Sửa
            </Button>
            <Button size="sm" variant="danger" onClick={onDelete}>
              Xóa
            </Button>
          </>
        ) : (
          <Button
            size="sm"
            variant="light"
            onClick={handleAddToCart}
            disabled={service.quantity === 0}
          >
            Thêm vào giỏ
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
  isAdmin: PropTypes.bool,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};
