import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function RoomCard({ room, isAdmin = false, onEdit, onDelete }) {
  return (
    <Card className="h-100 bg-dark text-white shadow-sm">
      <Card.Img
        variant="top"
        src={room.image}
        alt={room.name}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>{room.name}</Card.Title>
        <Card.Text>{room.description}</Card.Text>
        <Card.Text>
          <del>{room.price} VND</del><br />
          <strong>{room.currentPrice} VND</strong>
        </Card.Text>

        {isAdmin ? (
          <>
            <Button
              size="sm"
              variant="warning"
              className="me-2"
              onClick={onEdit}
            >
              Sửa
            </Button>
            <Button size="sm" variant="danger" onClick={onDelete}>
              Xóa
            </Button>
          </>
        ) : (
          <Link to={`/room/${room.id}`}>
            <Button variant="primary">Xem chi tiết</Button>
          </Link>
        )}
      </Card.Body>
    </Card>
  );
}

RoomCard.propTypes = {
  room: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    currentPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    image: PropTypes.string,
  }),
  isAdmin: PropTypes.bool,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};
