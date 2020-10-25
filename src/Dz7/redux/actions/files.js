import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const openFile = createAction('files/openFile');

export const fetchFileContent = createAsyncThunk(
  'files/fetchFileContent',
  async ({fileUrl}) => {
    return await fetch(fileUrl).then(res => res.text());
  },
  {
    condition: ({ gistId }, { getState }) => {
      const { files } = getState();
      return !files.data[gistId];
    }
  }
);

export function getFileContent({gistId, fileUrl, fileLanguage}) {
  return (dispatch, getState) => {
    const { files } = getState();
    return files.data.some(x => x.gistId === gistId)
      ? dispatch(openFile(gistId))
      : dispatch(fetchFileContent({gistId, fileUrl, fileLanguage}));
  };
};

