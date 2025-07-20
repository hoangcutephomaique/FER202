import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/services';

// Lấy danh sách dịch vụ
export const fetchServices = createAsyncThunk('services/fetch', async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
});

// Thêm dịch vụ
export const addService = createAsyncThunk('services/add', async (data, { dispatch }) => {
  await axios.post(BASE_URL, data);
  dispatch(fetchServices());
});

// Cập nhật dịch vụ
export const updateService = createAsyncThunk('services/update', async ({ id, data }, { dispatch }) => {
  await axios.put(`${BASE_URL}/${id}`, data);
  dispatch(fetchServices());
});

// Xóa dịch vụ
export const deleteService = createAsyncThunk('services/delete', async (id, { dispatch }) => {
  await axios.delete(`${BASE_URL}/${id}`);
  dispatch(fetchServices());
});

export const reduceServiceQuantity = createAsyncThunk(
  'services/reduceQuantity',
  async (id, { getState, dispatch }) => {
    const service = getState().services.items.find(s => s.id === id);
    if (service && service.quantity > 0) {
      const updated = { ...service, quantity: service.quantity - 1 };
      await axios.put(`http://localhost:3000/services/${id}`, updated);
      dispatch(fetchServices()); // Thêm dòng này để cập nhật lại danh sách
      return updated;
    }
    throw new Error('Không tìm thấy dịch vụ hoặc số lượng không hợp lệ');
  }
);
