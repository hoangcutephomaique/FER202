import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login({ redirectAdmin = '/admin/rooms', redirectUser = '/' }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = () => {
    if (!form.username.trim()) {
      toast.error('Vui lòng nhập tài khoản', {
        position: "top-center",
        autoClose: 3000,
      });
      return false;
    }
    if (!form.password.trim()) {
      toast.error('Vui lòng nhập mật khẩu', {
        position: "top-center",
        autoClose: 3000,
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      const res = await axios.get(
        `http://localhost:3000/users?username=${form.username}&password=${form.password}`
      );
      if (res.data.length === 1) {
        const user = res.data[0];
        dispatch(loginSuccess(user));
        navigate(user.role === 'admin' ? redirectAdmin : redirectUser);
      } else {
        toast.error('Thông tin đăng nhập không chính xác', {
          position: "top-center",
          autoClose: 3000,
        });
      }
    } catch (err) {
      toast.error('Lỗi khi đăng nhập. Vui lòng thử lại', {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Container className="p-4 bg-dark text-white rounded" style={{ maxWidth: '400px' }}>
          <h2 className="text-center mb-4">Đăng nhập</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit} noValidate>
            <Form.Group className="mb-3">
              <Form.Label>Tài khoản</Form.Label>
              <Form.Control
                type="text"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                placeholder="Nhập tài khoản"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="Nhập mật khẩu"
              />
            </Form.Group>
            <Button variant="danger" type="submit" className="w-100">
              Đăng nhập
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
}

Login.propTypes = {
  redirectAdmin: PropTypes.string,
  redirectUser: PropTypes.string,
};