<template>
  <div class="shopping-cart">
    <div v-if="cart.length === 0" class="empty-cart">
      <p>Giỏ hàng chưa có hàng</p>
      <router-link to="/thucdon" class="continue-shopping">
        Tiếp tục mua sắm
      </router-link>
    </div>
    <div v-else class="cart-container">
      <div class="cart-items">
        <div v-for="item in cart" :key="item.id" class="cart-item">
          <div class="item-image">
            <img :src="require(`@/assets/${item.image}`)" :alt="item.name" class="cart-item-image"/>
          </div>
          <div class="item-details">
            <h2>{{ item.name }}</h2>
            <p class="description">{{ item.description }}</p>
            <div class="quantity-control">
              <button @click="decreaseQuantity(item.id)" class="quantity-btn">-</button>
              <span class="quantity">{{ item.quantity }}</span>
              <button @click="increaseQuantity(item.id)" class="quantity-btn">+</button>
            </div>
            <p class="price">{{ formatPrice(calculateItemTotal(item)) }}</p>
            <button @click="removeFromCart(item.id)" class="remove-btn">Xóa</button> <!-- Xóa sản phẩm -->
          </div>
        </div>
      </div>

      <div class="cost-estimate">
        <h2>Tổng giá trị giỏ hàng</h2>
        <div class="cost-details">
          <div class="cost-row">
            <span>Tổng cộng</span>
            <span>{{ formatPrice(calculateSubtotal) }}</span>
          </div>
          <div class="cost-row total">
            <span>Thành tiền</span>
            <span>{{ formatPrice(calculateSubtotal) }}</span>
          </div>
        </div>

        <router-link to="/thucdon" class="continue-shopping-btn">
          Tiếp tục mua sắm
        </router-link>
        
        <!-- Thanh toán button -->
        <router-link to="/thanhtoan" class="payment-btn">
          Thanh toán
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState({
      cart: state => state.cart, // Giỏ hàng từ Vuex store
    }),
    calculateSubtotal() {
      return this.cart.reduce((total, item) => {
        return total + this.calculateItemTotal(item);
      }, 0);
    },
  },
 methods: {
  ...mapActions({
    removeFromCart: 'removeFromCart', 
    clearCart: 'clearCart',         
    updateQuantity: 'updateQuantity', 
  }),

  formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  },
  
  calculateItemTotal(item) {
    const basePrice = item.price * 1000;
    return basePrice * item.quantity;
  },

  increaseQuantity(id) {
    const item = this.cart.find(item => item.id === id);
    if (item) {
      this.updateQuantity({ productId: id, quantity: 1 }); 
    }
  },
  
  decreaseQuantity(id) {
    const item = this.cart.find(item => item.id === id);
    if (item && item.quantity > 1) { // 
      this.updateQuantity({ productId: id, quantity: -1 }); 
    }
  },
}

};
</script>

<style scoped>
.shopping-cart {
  max-width: 1200px;
  margin: 136px auto 40px;
  padding: 0 20px;
  margin-bottom: 100px;
}

.empty-cart {
  text-align: center;
  padding: 50px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.cart-container {
  display: flex;
  gap: 30px;
}

.cart-items {
  flex: 2;
}

.cart-item {
  display: flex;
  gap: 20px;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.cart-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.item-image {
  width: 150px;
  height: 150px;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

.item-details {
  flex: 1;
  text-align: left;
}

.item-details h2 {
  margin: 0 0 10px;
  color: #333;
  font-size: 1.2em;
}

.description {
  color: #666;
  margin-bottom: 10px;
  font-size: 0.9em;
}

.price {
  font-weight: bold;
  color: #e44d26;
  margin-bottom: 15px;
  font-size: 1.1em;
}

.quantity-control {
  display: flex;
  align-items: center;
  gap: 10px;
}

.quantity-btn {
  background: #ee2034;
  color: white;
  padding: 5px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.quantity-btn:hover {
  background: #c82333;
}

.quantity {
  font-size: 1.2em;
  color: #333;
}

.remove-btn {
  padding: 8px 24px;
  background: #ee2034;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.remove-btn:hover {
  background: #c82333;
}

.cost-estimate {
  flex: 1;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  height: fit-content;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 20px;
}

.cost-estimate h2 {
  color: #eea41b;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #8B4513;
}

.cost-details {
  margin: 20px 0;
}

.cost-row {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  color: #666;
}

.cost-row.total {
  font-weight: bold;
  border-top: 2px solid #333;
  border-bottom: none;
  margin-top: 10px;
  padding-top: 15px;
  color: #333;
  font-size: 1.2em;
}

.checkout-btn {
  width: 100%;
  padding: 15px;
  background: #f35d43;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 10px;
  transition: all 0.3s;
}

.checkout-btn:hover {
  background: #e5b208;
  transform: translateY(-2px);
}

.continue-shopping-btn {
  display: block;
  width: 100%;
  max-width: 200px;
  padding: 10px;
  background: #f35d43;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9em;
  transition: all 0.3s;
  margin-top: 10px;
}

.continue-shopping-btn:hover {
  background: #e5b208;
  color: white;
}

.payment-btn {
  display: block;
  width: 100%;
  max-width: 200px;
  padding: 15px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  font-size: 1em;
  margin-top: 20px;
}

.payment-btn:hover {
  background: #45a049;
}

@media (max-width: 768px) {
  .cart-container {
    flex-direction: column;
  }

  .cart-item {
    flex-direction: column;
  }

  .item-image {
    width: 100%;
    height: 200px;
  }

  .cost-estimate {
    position: static;
  }
}
</style>
