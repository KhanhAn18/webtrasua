import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const fetchProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};

const fetchProductById = async (id) => {
  const response = await axios.get(`${BASE_URL}/products/${id}`);
  return response.data;
};

const actions = {
  async getProducts({ commit }) {
    try {
      const products = await fetchProducts();
      commit('SET_PRODUCTS', products);
    } catch (err) {
      console.error(err);
    }
  },
  async getProduct({ commit }, id) {
    try {
      const product = await fetchProductById(id);
      commit('SET_PRODUCT', product);
    } catch (err) {
      console.error(err);
    }
  },
  addToCart({ commit }, product) {
    commit('ADD_TO_CART', product);
  },
  removeFromCart({ commit }, itemId) {
    commit('REMOVE_FROM_CART', itemId);
  },
  updateQuantity({ commit }, { itemId, quantity }) {
    commit('UPDATE_QUANTITY', { itemId, quantity });
  },
  clearCart({ commit }) {
    commit('CLEAR_CART');
  },
};

export default actions;
