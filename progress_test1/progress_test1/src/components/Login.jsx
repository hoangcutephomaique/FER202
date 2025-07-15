import { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Thêm import này

function Login({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Sử dụng hook useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3000/UserAccounts');
      const user = response.data.find(u => u.username === username && u.password === password);
      
      if (user) {
        setUser(user);
        navigate('/laptops'); 
      } else {
        setError('Invalid username or password!');
      }
    } catch {
      setError('Error connecting to server!');
    }
  };


  return (
    <Container className="my-5">
      <h2>Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary">Login</Button>
      </Form>
    </Container>
  );
}

Login.propTypes = {
  setUser: PropTypes.func.isRequired
};

export default Login;