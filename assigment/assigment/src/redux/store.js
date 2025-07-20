import { configureStore } from '@reduxjs/toolkit';
import roomReducer from './room/roomSlice';
import serviceReducer from './service/serviceSlice';
import authReducer from './auth/authSlice';
import cartReducer from './cart/cartSlice'; 

export default configureStore({
  reducer: {
    rooms: roomReducer,
    services: serviceReducer,
    auth: authReducer,
    cart: cartReducer,
  },
});
