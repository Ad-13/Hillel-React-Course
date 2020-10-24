import { createStore, applyMiddleware, compose } from 'redux';
import { cartLocalStorage } from './middlewares/cartLocalStorage';
import rootReducer from './reducers';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(cartLocalStorage),
);

export default createStore({
  rootReducer,
  enhancer
});
