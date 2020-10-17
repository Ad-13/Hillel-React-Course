export const APPLY_FILTER = 'APPLY_FILTER';

export const applyFilter = (key, value) => ({
  type: APPLY_FILTER,
  payload: {
    key, value
  }
});
