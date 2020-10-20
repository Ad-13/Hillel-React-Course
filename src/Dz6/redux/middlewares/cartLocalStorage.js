import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart';

export const cartLocalStorage = store => next => action => {
  if ([ADD_TO_CART, REMOVE_FROM_CART].includes(action.type)) {
    next(action);
    const nextState = store.getState();
    console.log(store);
    console.log(nextState);
    try {
      localStorage.setItem('products', JSON.stringify(nextState.cartProducts));
    } catch (e) {
      console.log('ERROR SAVING STATE')
    }
    return;
  }
  return next(action);
};
