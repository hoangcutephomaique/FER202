import { useSelector, useDispatch } from 'react-redux';
import { ListGroup, Button } from 'react-bootstrap';
import { removeFromCart } from '../redux/actions';

function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <h4>Giỏ hàng</h4>
      <ListGroup>
        {cart.map(item => (
          <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
            {item.name} - ${item.price}
            <Button size="sm" variant="danger" onClick={() => dispatch(removeFromCart(item.id))}>Xóa</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default Cart;