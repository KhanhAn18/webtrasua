import { saveCartToLocalStorage } from '../services/cartService';

const mutation = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  SET_PRODUCT(state, product) {
    state.product = product;
  },
  ADD_TO_CART(state, product) {
    const item = state.cart.find((p) => p.id === product.id);
    if (item) {
      if (item.quantity < product.instock) {
        item.quantity++;
      }
    } else {
      state.cart.push({ ...product, quantity: 1 });
    }
    saveCartToLocalStorage(state.cart);
  },
  REMOVE_FROM_CART(state, itemId) {
    const itemIndex = state.cart.findIndex((product) => product.id === itemId);
    if (itemIndex !== -1) {
      state.cart.splice(itemIndex, 1);
    }
    saveCartToLocalStorage(state.cart);
  },
  UPDATE_QUANTITY(state, { itemId, quantity }) {
    const itemIndex = state.cart.findIndex((product) => product.id === itemId);
    if (itemIndex !== -1) {
      const item = state.cart[itemIndex];
      state.cart[itemIndex] = { ...item, quantity };
    }
    saveCartToLocalStorage(state.cart);
  },
  CLEAR_CART(state) {
    state.cart = [];
    saveCartToLocalStorage(state.cart);
  },
};

export default mutation;
