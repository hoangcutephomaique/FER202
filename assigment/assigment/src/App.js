import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import RoomList from './pages/RoomList';
import RoomDetail from './pages/RoomDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import ServiceList from './pages/ServiceList';
import Checkout from './pages/Checkout';
import AdminRoomManager from './pages/AdminRoomManager';
import AdminServiceManager from './pages/AdminServiceManager';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="bg-dark text-white" style={{ minHeight: '100vh', display: 'flex' }}>
          <Sidebar />
          <div style={{ marginLeft: '220px', width: '100%' }}>
            <Routes>
              <Route path="/login" element={<Login />} />

              {/* Bắt buộc đăng nhập mọi route khác */}
              <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="/rooms" element={<ProtectedRoute><RoomList /></ProtectedRoute>} />
              <Route path="/room/:id" element={<ProtectedRoute><RoomDetail /></ProtectedRoute>} />
              <Route path="/services" element={<ProtectedRoute><ServiceList /></ProtectedRoute>} />
              <Route path="/cart" element={<ProtectedRoute role="customer"><Cart /></ProtectedRoute>} />
              <Route path="/checkout" element={<ProtectedRoute role="customer"><Checkout /></ProtectedRoute>} />

              {/* Admin CRUD route */}
              <Route path="/admin/rooms" element={<ProtectedRoute role="admin"><AdminRoomManager /></ProtectedRoute>} />
              <Route path="/admin/services" element={<ProtectedRoute role="admin"><AdminServiceManager /></ProtectedRoute>} />
            </Routes>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
