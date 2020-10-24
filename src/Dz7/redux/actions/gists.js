import { createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'https://api.github.com/gists/public';

export const fetchGists = createAsyncThunk('gists/fetchGists', async () => {
  const data = await fetch(apiUrl).then(res => res.json());
  return data;
});
