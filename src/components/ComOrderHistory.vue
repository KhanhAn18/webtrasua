<template>
  <div class="payment-history-page">
    <h1>Lịch sử Thanh Toán</h1>

    <div v-if="orders && orders.length > 0" class="order-list">
      <div v-for="order in orders" :key="order.id" class="order-card">
        <h2>Đơn hàng #{{ order.id }}</h2>
        <p><strong>Ngày đặt hàng:</strong> {{ order.date }}</p>
        <p><strong>Phương thức thanh toán:</strong> {{ order.paymentMethod }}</p>
        <p><strong>Địa chỉ giao hàng:</strong> {{ order.shippingAddress }}</p>
        <p><strong>Tổng tiền:</strong> {{ order.totalPrice.toLocaleString() }} VND</p>
      </div>
    </div>

    <div v-else>
      <p>Chưa có đơn hàng nào được lưu.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [],
    };
  },
  created() {
    // Lấy thông tin đơn hàng từ localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      const userOrders = JSON.parse(localStorage.getItem(`${currentUser.username}_orders`)) || [];
      this.orders = userOrders;
    }
  }
};
</script>

<style scoped>
.payment-history-page {
  max-width: 800px;
  margin: 100px auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  margin-bottom: 20px;
  color: #eda007;
}

.order-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.order-card {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
}

.order-card h2 {
  margin: 0 0 10px;
}

.order-card p {
  margin: 5px 0;
  color: #555;
}

.order-card p strong {
  color: #333;
}
</style>
