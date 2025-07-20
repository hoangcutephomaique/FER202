import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/rooms';

export const fetchRooms = createAsyncThunk('rooms/fetch', async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
});

export const addRoom = createAsyncThunk('rooms/add', async (data, { dispatch }) => {
  await axios.post(BASE_URL, data);
  dispatch(fetchRooms()); 
});

export const updateRoom = createAsyncThunk('rooms/update', async ({ id, data }, { dispatch }) => {
  await axios.put(`${BASE_URL}/${id}`, data);
  dispatch(fetchRooms());
});

export const deleteRoom = createAsyncThunk('rooms/delete', async (id, { dispatch }) => {
  await axios.delete(`${BASE_URL}/${id}`);
  dispatch(fetchRooms());
});
