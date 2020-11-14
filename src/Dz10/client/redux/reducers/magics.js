import { createReducer } from '@reduxjs/toolkit';
import { addMagics, deleteMagics, getMagics, updateMagics } from '../actions/magics';

const initialState = {
  loading: false,
  innerLoading: false,
  addingLoading: false,
  data: [],
  error: null
};

export const magicsReducer = createReducer(
  initialState,
  {
    [getMagics.pending]: state => {
      state.loading = true;
      state.error = null
    },
    [getMagics.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [getMagics.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    [addMagics.pending]: state => {
      state.addingLoading = true;
      state.error = null
    },
    [addMagics.fulfilled]: (state, action) => {
      state.data.push(action.payload);
      state.addingLoading = false;
    },
    [addMagics.rejected]: (state, action) => {
      state.error = action.payload;
      state.addingLoading = false;
    },
    [updateMagics.pending]: state => {
      state.innerLoading = true;
      state.error = null
    },
    [updateMagics.fulfilled]: (state, action) => {
      const index = state.data.findIndex(x => x._id === action.payload._id);
      state.data.splice(index, 1, action.payload);
      state.innerLoading = false;
    },
    [updateMagics.rejected]: (state, action) => {
      state.error = action.payload;
      state.innerLoading = false;
    },
    [deleteMagics.pending]: state => {
      state.innerLoading = true;
      state.error = null
    },
    [deleteMagics.fulfilled]: (state, action) => {
      const index = state.data.findIndex(x => x._id === action.payload._id);
      state.data.splice(index, 1);
      state.innerLoading = false;
    },
    [deleteMagics.rejected]: (state, action) => {
      state.error = action.payload;
      state.innerLoading = false;
    }
  }
);
