<template>
  <div class="checkout">
    <h2>Xác nhận đơn hàng</h2>
    <div class="checkout-container">
      <!-- Phần giao hàng -->
      <div class="delivery-info">
        <h3>Giao hàng</h3>
        <div class="location">
          <p>Hồ Chí Minh</p>
          <p>Hồ Chí Minh, Hồ Chí Minh, Việt Nam</p>
        </div>
        <div class="delivery-time">
          <p>Nhận hàng trong ngày 15 - 30 phút</p>
          <p>Vào lúc: Càng sớm càng tốt</p>
        </div>
        <input type="text" placeholder="Tên người nhận" v-model="name" />
        <input type="text" placeholder="Số điện thoại" v-model="phone" />
        <input type="text" placeholder="Thêm hướng dẫn giao hàng" v-model="deliveryInstructions" />
      </div>

      <!-- Phần các món đã chọn -->
      <div class="order-info">
        <h3>Các món đã chọn</h3>
        <div class="order-item">
          <span>1 x Trân châu trắng</span>
          <span>Nhỏ</span>
          <span>10,000đ</span>
          <button @click="removeItem">Xóa</button>
        </div>
        <button @click="addItem">Thêm món</button>
      </div>

      <!-- Phần tổng cộng -->
      <div class="total-info">
        <h3>Tổng cộng</h3>
        <div class="total-details">
          <div>
            <span>Thành tiền</span>
            <span>10,000đ</span>
          </div>
          <div>
            <span>Phí giao hàng</span>
            <span>18,000đ</span>
          </div>
          <div>
            <span>Khuyến mãi</span>
            <span>0đ</span>
          </div>
          <div class="final-total">
            <span>Thành tiền</span>
            <span>28,000đ</span>
          </div>
        </div>
        <button @click="placeOrder">Đặt hàng</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      deliveryInstructions: "",
      items: [{ name: "Trân châu trắng", size: "Nhỏ", price: 10000 }],
      deliveryFee: 18000,
      discount: 0,
    };
  },
  computed: {
    totalAmount() {
      return this.items.reduce((total, item) => total + item.price, 0);
    },
    finalTotal() {
      return this.totalAmount + this.deliveryFee - this.discount;
    },
  },
  methods: {
    removeItem(index) {
      this.items.splice(index, 1);
    },
    addItem() {
      // Logic thêm món vào danh sách items
    },
    placeOrder() {
      // Xử lý khi nhấn "Đặt hàng"
      console.log("Order placed:", this.name, this.phone, this.items);
    },
  },
};
</script>

<style scoped>
.checkout {
  font-family: Arial, sans-serif;
}

.checkout-container {
  display: flex;
  gap: 20px;
}

.delivery-info,
.order-info,
.total-info {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
}

.total-info .final-total {
  font-weight: bold;
}

button {
  background-color: #ffa500;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}
</style>