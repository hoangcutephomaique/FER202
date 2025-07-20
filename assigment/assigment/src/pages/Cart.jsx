import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart, increaseQuantity, decreaseQuantity } from '../redux/cart/cartSlice';
import { Container, Table, Button } from 'react-bootstrap';

export default function Cart() {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const handleCheckout = () => {
    dispatch(clearCart());
    alert('Cảm ơn bạn đã đặt dịch vụ!');
  };

  return (
    <Container className="my-5">
      <h2>Giỏ Dịch Vụ</h2>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Dịch vụ</th>
            <th>Số lượng</th>
            <th>Giá</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <Button size="sm" onClick={() => dispatch(decreaseQuantity(item.id))}>-</Button>
                <span className="mx-2">{item.quantity}</span>
                <Button size="sm" onClick={() => dispatch(increaseQuantity(item.id))}>+</Button>
              </td>
              <td>{item.price * item.quantity} VND</td>
              <td>
                <Button variant="danger" onClick={() => dispatch(removeFromCart(item.id))}>Xóa</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h4 className="text-end">Tổng cộng: {total} VND</h4>
      <div className="text-end">
        <Button variant="success" onClick={handleCheckout}>Thanh Toán</Button>
      </div>
    </Container>
  );
}