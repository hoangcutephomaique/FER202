import { createSlice } from '@reduxjs/toolkit';
import { fetchRooms } from './roomThunk';

const roomSlice = createSlice({
  name: 'rooms',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRooms.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchRooms.rejected, (state) => {
        state.loading = false;
        state.error = 'Lỗi khi tải danh sách phòng';
      });
  },
});

export default roomSlice.reducer;
