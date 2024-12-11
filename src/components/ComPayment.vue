<template>
  <div class="order-confirmation">
    <h2>Xác nhận đơn hàng</h2>
    
    <div class="order-container">
      <!-- Phần giao hàng -->
      <div class="shipping">
        <h3>Giao hàng</h3>
        <p>Hồ Chí Minh, Hồ Chí Minh, Việt Nam</p>
        <p>Nhận hàng trong ngày 15 - 30 phút</p>
        <p>Vào lúc: Càng sớm càng tốt</p>

        <input type="text" placeholder="Tên người nhận" v-model="name" />
        <input type="text" placeholder="Số điện thoại" v-model="phone" />
        <input type="text" placeholder="Thêm hướng dẫn giao hàng" v-model="instructions" />

        <!-- Phương thức thanh toán -->
        <h3>Phương thức thanh toán</h3>
        <div class="payment-methods">
          <label v-for="(method, index) in paymentMethods" :key="index">
            <input 
              type="radio" 
              :value="method" 
              v-model="selectedPaymentMethod" 
            />
            {{ method }}
          </label>
        </div>

        <div class="terms">
          <input type="checkbox" v-model="agreedTerms" />
          <span>Đồng ý với các <a href="#">điều khoản và điều kiện</a> mua hàng của The Coffee House</span>
        </div>
      </div>

      <!-- Phần các món đã chọn -->
      <div class="order-summary">
        <h3>Các món đã chọn</h3>
        <div class="order-items">
          <div class="item" v-for="(item, index) in items" :key="index">
            <span>{{ item.quantity }} x {{ item.name }}</span>
            <span>{{ item.price }}đ</span>
          </div>
        </div>
        
        <div class="total">
          <p>Thành tiền: <span>{{ formatCurrency(total) }}đ</span></p>
          <p>Phí giao hàng: <span>{{ formatCurrency(shippingFee) }}đ</span></p>
          <p>Khuyến mãi: <span>{{ discount ? formatCurrency(discount) : '0đ' }}</span></p>
          <p class="final-amount">Thành tiền: <span>{{ formatCurrency(finalAmount) }}đ</span></p>
        </div>

        <button @click="placeOrder" class="order-button">Đặt hàng</button>
        <button @click="clearOrder" class="clear-button">Xóa đơn hàng</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'OrderConfirmation',
  setup() {
    const name = ref('');
    const phone = ref('');
    const instructions = ref('');
    const selectedPaymentMethod = ref('MoMo');
    const agreedTerms = ref(false);

    const items = ref([
      { name: 'Trà Xanh Dường Đen', quantity: 2, price: 65000 },
    ]);

    const paymentMethods = ref(['Tiền mặt', 'MoMo', 'ZaloPay', 'ShopeePay', 'Thẻ ngân hàng']);
    const shippingFee = ref(18000);
    const discount = ref(0);

    const total = computed(() => items.value.reduce((sum, item) => sum + item.price * item.quantity, 0));
    const finalAmount = computed(() => total.value + shippingFee.value - discount.value);

    const formatCurrency = (value) => value.toLocaleString();

    const placeOrder = () => {
      if (!agreedTerms.value) {
        alert("Vui lòng đồng ý với điều khoản và điều kiện.");
        return;
      }
      alert("Đặt hàng thành công!");
    };

    const clearOrder = () => {
      items.value = [];
    };

    return {
      name,
      phone,
      instructions,
      selectedPaymentMethod,
      agreedTerms,
      items,
      paymentMethods,
      shippingFee,
      discount,
      total,
      finalAmount,
      formatCurrency,
      placeOrder,
      clearOrder,
    };
  },
};
</script>

<style scoped>
.order-confirmation {
  max-width: 800px;
  margin: auto;
  font-family: Arial, sans-serif;
}

.order-container {
  display: flex;
  justify-content: space-between;
}

.shipping, .order-summary {
  width: 48%;
}

.order-summary {
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
}

.order-items .item {
  display: flex;
  justify-content: space-between;
}

.total p {
  display: flex;
  justify-content: space-between;
}

.final-amount {
  font-weight: bold;
  color: #e67e22;
}

.order-button, .clear-button {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.order-button {
  background-color: #e67e22;
  color: white;
}

.clear-button {
  background-color: #e74c3c;
  color: white;
}

.payment-methods label {
  display: block;
  margin: 5px 0;
}

.terms {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.terms span a {
  color: #e67e22;
  text-decoration: none;
}
</style>
