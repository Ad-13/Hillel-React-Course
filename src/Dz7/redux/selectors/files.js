import { createSelector } from '@reduxjs/toolkit';

export const getFiles = createSelector(
  state => state.files.data,
  files => files
);

export const getFilesLoading = createSelector(
  state => state.files.loading,
  loading => loading
);

export const getSelectedFile = createSelector(
  getFiles,
  (files) => files.find(files => files.selected)
);

