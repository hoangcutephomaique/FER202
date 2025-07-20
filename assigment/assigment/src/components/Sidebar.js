import { Nav } from 'react-bootstrap';
import './Sidebar.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import { logout } from '../redux/auth/authSlice';

export default function Sidebar() {
    const user = useSelector(state => state.auth.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>🏡 Homestay</h2>
            </div>

            <Nav className="sidebar-nav flex-column">
                

                {user?.role === 'customer' && (
                    <>
                        <NavLink to="/" end className="sidebar-link">Trang chủ</NavLink>
                        <NavLink to="/rooms" className="sidebar-link">Phòng</NavLink>
                        <NavLink to="/services" className="sidebar-link">Dịch vụ</NavLink>
                        <NavLink to="/cart" className="sidebar-link">Giỏ hàng</NavLink>
                    </>
                )}

                {user?.role === 'admin' && (
                    <>
                        <NavLink to="/admin/rooms" className="sidebar-link">Quản lý Phòng</NavLink>
                        <NavLink to="/admin/services" className="sidebar-link">Quản lý Dịch vụ</NavLink>
                    </>
                )}

                {!user && (
                    <NavLink to="/login" className="sidebar-link">Đăng nhập</NavLink>
                )}

                {user && (
                    <button onClick={handleLogout} className="sidebar-link btn btn-link text-start">
                        Đăng xuất ({user.username})
                    </button>
                )}
            </Nav>
            <div className="sidebar-footer d-flex justify-content-center gap-3">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://google.com" target="_blank" rel="noreferrer" className="social-icon">
                    <i className="fab fa-google"></i>
                </a>
            </div>
        </div>
    );
}
