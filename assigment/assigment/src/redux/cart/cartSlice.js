import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('cart')) || []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const index = state.items.findIndex(i => i.id === item.id);

      if (index !== -1) {
        const currentInCart = state.items[index].quantity;
        if (currentInCart < item.quantity) {
          state.items[index].quantity += 1;
        } // else: đã đạt max số lượng, không thêm nữa
      } else {
        if (item.quantity > 0) {
          state.items.push({ ...item, quantity: 1 });
        }
      }

      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(i => i.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    increaseQuantity(state, action) {
      const index = state.items.findIndex(i => i.id === action.payload);
      if (index !== -1) state.items[index].quantity += 1;
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    decreaseQuantity(state, action) {
      const index = state.items.findIndex(i => i.id === action.payload);
      if (index !== -1 && state.items[index].quantity > 1) {
        state.items[index].quantity -= 1;
      }
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    clearCart(state) {
      state.items = [];
      localStorage.removeItem('cart');
    }
  }
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;