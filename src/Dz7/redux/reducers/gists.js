import { createReducer } from '@reduxjs/toolkit';
import { fetchGists } from '../actions/gists';

const initialState = {
  loading: false,
  data: [],
  error: null
};

export const gistsReducer = createReducer(
  initialState,
  {
    [fetchGists.pending]: (state) => {
      state.loading = true;
      state.error = null
    },
    [fetchGists.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [fetchGists.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    }
  }
);
