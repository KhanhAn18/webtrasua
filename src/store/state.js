import { loadCartFromLocalStorage } from '../services/cartService';

const state = {
  products: [],
  product: {},
  cart: loadCartFromLocalStorage(),
  user: {},
};

export default state;
