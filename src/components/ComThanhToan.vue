<template>
  <div class="checkout-page">
    <h1>Thanh toán</h1>

    <!-- Thông tin giao hàng -->
    <div class="shipping-info">
      <h2>Thông tin giao hàng</h2>
      <form>
        <div class="form-group">
          <label for="name">Họ và Tên</label>
          <input type="text" id="name" v-model="customerInfo.name" placeholder="Nhập họ và tên" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="customerInfo.email" placeholder="Nhập email" />
        </div>
        <div class="form-group">
          <label for="address">Địa chỉ</label>
          <input type="text" id="address" v-model="customerInfo.address" placeholder="Nhập địa chỉ giao hàng" />
        </div>
      </form>
    </div>

    <!-- Phương thức thanh toán -->
    <div class="payment-method">
      <h2>Phương thức thanh toán</h2>
      <ul>
        <li>
          <input type="radio" id="cod" value="COD" v-model="selectedPaymentMethod" />
          <label for="cod">Thanh toán khi giao hàng (COD)</label>
        </li>
        <li>
          <input type="radio" id="credit" value="Credit" v-model="selectedPaymentMethod" />
          <label for="credit">Thẻ tín dụng</label>
        </li>
        <li>
          <input type="radio" id="paypal" value="PayPal" v-model="selectedPaymentMethod" />
          <label for="paypal">PayPal</label>
        </li>
      </ul>
    </div>

    <!-- Hoàn tất đơn hàng -->
    <div class="actions">
      <button class="btn btn-secondary">Giỏ hàng</button>
      <button class="btn btn-primary" @click="completeOrder">Hoàn tất đơn hàng</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customerInfo: {
        name: "",
        email: "",
        address: "",
      },
      selectedPaymentMethod: "COD",
    };
  },
 methods: {
  completeOrder() {
    // Kiểm tra thông tin giao hàng và phương thức thanh toán
    if (!this.customerInfo.name || !this.customerInfo.address) {
      alert("Vui lòng điền đầy đủ thông tin giao hàng!");
      return;
    }
    if (!this.selectedPaymentMethod) {
      alert("Vui lòng chọn phương thức thanh toán!");
      return;
    }

    // Lưu đơn hàng vào localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      const orderHistory = JSON.parse(localStorage.getItem(`${currentUser.username}_orders`)) || [];
      const order = {
        id: Date.now(),  // ID đơn hàng là thời gian hiện tại
        date: new Date().toLocaleString(),
        totalPrice: this.calculateTotalPrice(),
        paymentMethod: this.selectedPaymentMethod,
        shippingAddress: this.customerInfo.address
      };
      orderHistory.push(order);  // Thêm đơn hàng vào lịch sử
      localStorage.setItem(`${currentUser.username}_orders`, JSON.stringify(orderHistory));
      console.log('Đơn hàng đã được lưu:', order);  // Thêm log để kiểm tra
    }

    // Xóa các sản phẩm trong giỏ hàng của người dùng
    const carts = JSON.parse(localStorage.getItem('carts')) || {};
    if (currentUser) {
      carts[currentUser.username] = [];  // Xóa toàn bộ sản phẩm trong giỏ hàng
      localStorage.setItem('carts', JSON.stringify(carts));
    }

    // Hiển thị thông báo thành công
    alert("Đặt hàng thành công!");

    // Chuyển hướng đến trang Lịch sử đơn hàng
    this.$router.push('/orders');
  },
  calculateTotalPrice() {
    return 100000; 
  }
}

};
</script>

<style scoped>
.checkout-page {
  max-width: 800px;
  margin: 150px auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1, h2 {
  color: #333;
  margin-bottom: 10px;
}

form {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.payment-method ul {
  list-style: none;
  padding: 0;
}

.payment-method li {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

input[type="radio"] {
  margin-right: 10px;
}

.actions {
  display: flex;
  justify-content: space-between;
}

.actions .btn {
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-secondary {
  background-color: #f8f9fa;
  color: #333;
}
</style>