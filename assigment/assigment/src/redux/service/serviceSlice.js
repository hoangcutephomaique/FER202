import { createSlice } from '@reduxjs/toolkit';
import { fetchServices, reduceServiceQuantity } from './serviceThunk';

const serviceSlice = createSlice({
  name: 'services',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchServices.rejected, (state) => {
        state.loading = false;
        state.error = 'Lỗi khi tải dịch vụ';
      })

      .addCase(reduceServiceQuantity.fulfilled, (state, action) => {
        const updated = action.payload;
        const index = state.items.findIndex(s => s.id === updated.id);
        if (index !== -1) {
          state.items[index] = updated;
        }
      });
  },
});

export default serviceSlice.reducer;
