import { createReducer } from '@reduxjs/toolkit';
import { fetchFileContent, openFile } from '../actions/files';

const initialState = {
  loading: false,
  data: [],
  error: null
};

export const filesReducer = createReducer(
  initialState,
  {
    [fetchFileContent.pending]: (state) => {
      state.loading = true;
      state.error = null
    },
    [fetchFileContent.fulfilled]: (state, action) => {
      state.data = state.data.map(x => ({ ...x, selected: false }));
      state.data.push({
        gistId: action.meta.arg.gistId,
        language: action.meta.arg.fileLanguage,
        fileName: action.meta.arg.fileName,
        content: action.payload,
        selected: true
      });
      state.loading = false;
    },
    [fetchFileContent.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    [openFile]: (state, action) => {
      state.data = state.data.map(x => {
        return x.gistId === action.payload.gistId && x.fileName === action.payload.fileName
          ? ({ ...x, selected: true })
          : ({ ...x, selected: false })
      });
    }
  }
);
