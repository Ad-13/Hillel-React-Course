import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart';

let initialState = [];

try {
  initialState = JSON.parse(localStorage.getItem('products') || '[]')
} catch (e) {
  console.log('Local storage is empty')
}

export default function cartReducer(state = initialState, action) {
  const basketProduct = state.find(x => x.id === action.payload);

  switch (action.type) {
    case ADD_TO_CART: {
      return basketProduct
        ? state.map(x => x.id === basketProduct.id ? {...basketProduct, basketCount: ++basketProduct.basketCount} : x)
        : [...state, {id: action.payload, basketCount: 1}];
    }

    case REMOVE_FROM_CART: {
      if (!basketProduct) return state;

      return basketProduct.basketCount > 1
        ? state.map(x => x.id === basketProduct.id ? {...basketProduct, basketCount: --basketProduct.basketCount} : x)
        : state.filter(x => x.id !== action.payload);
    }

    default: return state;
  }
}
