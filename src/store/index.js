import { createStore } from 'vuex';

export default createStore({
  state: {
    products: [], 
    cart: [],    
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    ADD_TO_CART(state, product) {
      const existingItem = state.cart.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;                                               // Tăng số lượng của sản phẩm đã có trong giỏ
      } else {
        state.cart.push({ ...product, quantity: 1 });                            // Thêm sản phẩm mới vào giỏ
      }
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);               // Xóa sản phẩm khỏi giỏ
    },
    UPDATE_CART(state, { productId, quantity }) {
      const product = state.cart.find(item => item.id === productId);
      if (product) {
        if (quantity > 0) {
          product.quantity += quantity; 
        } else if (product.quantity + quantity <= 0) {
          state.cart = state.cart.filter(item => item.id !== productId);         // Nếu quantity <= 0, xóa sản phẩm khỏi giỏ hàng
        } else {
          product.quantity += quantity;                                              // Nếu không thì chỉ giảm số lượng
        }
      }
    },
    SET_CART(state, cart) {
      state.cart = cart; 
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await fetch('http://localhost:3000/product'); 
        const data = await response.json();
  
        // Kt
        console.log('Sản phẩm tải về:', data);
  
        if (Array.isArray(data) && data.length > 0) {
          commit('SET_PRODUCTS', data); // Lưu sản phẩm vào state
        } else {
          console.error('Dữ liệu sản phẩm không hợp lệ');
        }
      } catch (error) {
        console.error('Lỗi khi tải sản phẩm:', error);
      }
    },
  
    async fetchProductById({ state }, productId) {
      try {
        // Kiểm tra sản phẩm trong state
        const product = state.products.find(p => p.id === parseInt(productId));
        if (product) {
          console.log('Sản phẩm tìm thấy từ state:', product);
          return product;
        } else {
          // Nếu không có trong state, gọi API để lấy sản phẩm
          const response = await fetch(`http://localhost:3000/product/${productId}`);
          const data = await response.json();
          console.log('Dữ liệu sản phẩm từ API:', data);
          return data;
        }
      } catch (error) {
        console.error('Lỗi khi tải sản phẩm:', error);
        return null;
      }
    },
  
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product); 
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId); 
    },
    updateQuantity({ commit }, { productId, quantity }) {
      commit('UPDATE_CART', { productId, quantity }); 
    },
    setCart({ commit }, cart) {
      commit('SET_CART', cart); 
    },
  },
  
  getters: {
    allProducts(state) {
      return state.products; // Lấy tất cả sản phẩm
    },
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === id);
    },
    cart(state) {
      return state.cart; // Lấy giỏ hàng
    },
    cartSubtotal(state) {
      return state.cart.reduce((total, item) => {
        const product = state.products.find(p => p.id === item.id);
        return total + (product ? product.price * item.quantity : 0);
      }, 0);
    },
    cartTotal(state, getters) {
      const shippingCost = 30000; 
      const discount = 0; // Giảm giá
      return getters.cartSubtotal + shippingCost - discount;
    },
  },
});