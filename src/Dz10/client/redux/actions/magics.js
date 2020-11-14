import { createAsyncThunk } from '@reduxjs/toolkit';
const axios = require('axios');

const apiUrl = 'http://localhost:3001/api/magics';

export const getMagics = createAsyncThunk('magics/getMagics', async () => {
  const response = await axios.get(apiUrl).catch(error => {
    throw new Error(error);
  });
  return response.data;
});

export const addMagics = createAsyncThunk('magics/addMagics', async model => {
  const response = await axios.post(apiUrl, model).catch(error => {
    throw new Error(error);
  });
  return response.data;
});

export const updateMagics = createAsyncThunk('magics/updateMagics', async model => {
  await axios.put(`${apiUrl}/${model._id}`, model).catch(error => {
    throw new Error(error);
  });
  return model;
});

export const deleteMagics = createAsyncThunk('magics/deleteMagics', async id => {
  await axios.delete(`${apiUrl}/${id}`).catch(error => {
    throw new Error(error);
  });
  return id;
});
