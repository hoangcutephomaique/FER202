import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/cart/cartSlice';
import { Container, Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const cart = useSelector(state => state.cart.items);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleConfirm = () => {
    // Xử lý thanh toán giả lập
    alert('✅ Thanh toán thành công!');
    dispatch(clearCart());
    navigate('/'); // hoặc navigate('/success') nếu bạn có trang đó
  };

  if (cart.length === 0) {
    return (
      <Container className="my-5 text-center">
        <h4>🛒 Giỏ hàng của bạn đang trống.</h4>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <h2>Xác nhận thanh toán</h2>
      <Table bordered className="text-white">
        <thead>
          <tr>
            <th>Dịch vụ</th>
            <th>Số lượng</th>
            <th>Tổng</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price * item.quantity} VND</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h4 className="text-end">Tổng thanh toán: {total} VND</h4>
      <div className="text-end">
        <Button variant="primary" onClick={handleConfirm}>
          Xác nhận
        </Button>
      </div>
    </Container>
  );
}
