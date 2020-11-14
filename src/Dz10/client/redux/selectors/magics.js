import { createSelector } from '@reduxjs/toolkit';

export const getMagicsSelector = createSelector(
  state => state.magics.data,
  magics => magics
);

export const getMagicLoading = createSelector(
  state => state.magics.loading,
  loading => loading
);

export const getSelectedMagicById = createSelector(
  getMagicsSelector,
  (_, magicId) => magicId,
  (magics, magicId) => magics.find(magic => magic.id === magicId)
);

export const getMagicInnerLoading = createSelector(
  state => state.magics.innerLoading,
  loading => loading
);

export const getMagicAddingLoading = createSelector(
  state => state.magics.addingLoading,
  loading => loading
);
