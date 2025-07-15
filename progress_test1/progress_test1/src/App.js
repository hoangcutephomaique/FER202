import { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Login from './components/Login';
import LaptopList from './components/LaptopList';
import LaptopDetail from './components/LaptopDetail';
import LaptopForm from './components/LaptopForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useNavigate } from 'react-router-dom';
function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>Laptop Management</Navbar.Brand>
          <Nav className="me-auto">
            {user ? (
              <>
                <Nav.Link as={NavLink} to="/laptops">Laptop List</Nav.Link>
              </>
            ) : (
              <Nav.Link as={NavLink} to="/">Login</Nav.Link>
            )}
          </Nav>
          {user && (
            <LogoutButton setUser={setUser} />
          )}
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route path="/laptops" element={<LaptopList user={user} />} />
          <Route path="/laptops/:id" element={<LaptopDetail user={user} />} />
          <Route path="/laptops/add" element={<LaptopForm user={user} />} />
          <Route path="/laptops/edit/:id" element={<LaptopForm user={user} />} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}



function LogoutButton({ setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <Button variant="outline-light" onClick={handleLogout}>
      Logout
    </Button>
  );
}

export default App;
