import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaHome, FaBed, FaConciergeBell, FaShoppingCart, FaSignInAlt } from 'react-icons/fa';

export default function Header() {
  return (
    <Navbar bg="black" variant="dark" expand="lg" className="shadow-sm py-3 border-bottom border-secondary">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold text-pink">
          🏠 Homestay
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto gap-3">
            <Nav.Link as={NavLink} to="/" end>
              <FaHome className="me-1" /> Trang chủ
            </Nav.Link>
            <Nav.Link as={NavLink} to="/rooms">
              <FaBed className="me-1" /> Phòng
            </Nav.Link>
            <Nav.Link as={NavLink} to="/services">
              <FaConciergeBell className="me-1" /> Dịch vụ
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cart">
              <FaShoppingCart className="me-1" /> Giỏ hàng
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login">
              <FaSignInAlt className="me-1" /> Đăng nhập
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
