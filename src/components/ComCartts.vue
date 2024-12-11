<template>
  <div class="main-content">
    <!-- Cart modal, always visible when there are items in the cart -->
    <div v-if="cart.length > 0" class="modal-content">
      <div class="table-container">
        <table class="table text-center">
          <thead>
            <tr>
              <th>Hình</th>
              <th>Sản phẩm</th>
              <th>Đơn giá</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <!-- Using v-for to display cart items -->
            <tr v-for="item in cart" :key="item.id">
              <td><img :src="item.image" style="height: 100px; width: 100px;" /></td>
              <td class="align-middle">{{ item.name }}</td>
              <td class="align-middle">{{ item.price }} đ</td>
              <td class="align-middle">
                <button @click="decreaseQuantity(item)" class="button">-</button>
                {{ item.quantity }}
                <button @click="increaseQuantity(item)" class="button">+</button>
              </td>
              <td class="align-middle">{{ item.price * item.quantity }} đ</td>
              <td class="align-middle">
                <button class="btn btn-danger" @click="removeCart(item)">Xóa
                  <i class="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colspan="3">Tổng cộng</th>
              <th>{{ tongSoLuong }}</th>
              <th>{{ tongTien }} đ</th>
              <th>
                <button class="btn btn-danger" @click="removeAllCart()">
                  Xóa hết
                </button>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
      <!-- Order Summary and Checkout Button -->
      <div class="summary">
        <div class="summary-item">
          <span>Tạm tính:</span>
          <span class="price-text">{{ tongTien }} đ</span>
        </div>
        <div class="summary-item">
          <span>Giảm giá:</span>
          <span class="discount-text">10.000 đ</span>
        </div>
        <div class="summary-item total">
          <span>Tổng tiền:</span>
          <span class="price-text">{{ tongTien - 10000 }} đ</span>
        </div>
       <button class="btn-order" @click="goToOrderInfo">TIẾN HÀNH ĐẶT HÀNG</button>
      </div>
    </div>
    <div v-else class="empty-cart">
      <p>Giỏ hàng của bạn đang trống. Hãy thêm sản phẩm vào giỏ hàng!</p>
      <button @click="continueShopping" class="btn-continue-shopping">Tiếp tục mua sắm</button>
    </div>
  </div>
</template>

<script>
import items from "../data/drink";
import cart from "../data/cart";

export default {
  data() {
    return {
      cart: cart,
      isCartVisible: true,
    };
  },
  computed: {
    tongTien() {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    tongSoLuong() {
      return this.cart.reduce((total, item) => total + item.quantity, 0);
    },
  },
  methods: {
    increaseQuantity(item) {
      let product = items.find((i) => i.id === item.id);
      if (item.quantity < product.quality) {
        item.quantity++;
      }
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.removeCart(item);
      }
    },
    removeCart(item) {
      this.cart = this.cart.filter((cartItem) => cartItem.id != item.id);
    },
    removeAllCart() {
      this.cart = [];
    },
    goToOrderInfo() {
    this.$router.push({ name: 'OrderInfo' });
    },
    continueShopping() {
      this.$router.push({ name: 'ThucDon' });  // Điều hướng đến trang sản phẩm
    },
  },
};
</script>

<style>
.main-content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  text-align: center;
}

.modal-content {
  display: flex;
  gap: 20px;
  background-color: white;
  padding: 20px;
  margin: 100px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 80%;
  border: 1px solid #ccc;
}

.table-container {
  flex: 3;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th {
  background-color: #0c713d;
  color: white;
  padding: 10px;
  text-align: center;
  font-weight: bold;
}

.table td {
  padding: 10px;
  text-align: center;
  vertical-align: middle;
  border-top: 1px solid #ddd;
}

.align-middle {
  vertical-align: middle;
}

.summary {
  flex: 1;
  border: 1px solid #ddd;
  padding: 20px;
  background-color: #f9f9f9;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
}

.price-text {
  color: #0c713d;
  font-weight: bold;
}

.discount-text {
  color: #ff4c4c;
}

.total {
  font-size: 18px;
  font-weight: bold;
}

.button {
  padding: 5px;
  font-size: 16px;
}

.btn-order {
  background-color: #0c713d;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  margin-top: 15px;
  border-radius: 5px;
}

.btn-order:hover {
  background-color: #004d00;
}

.btn-danger {
  background-color: #4ce813;
  color: white;
  border: none;
  border-radius: 25%;
  padding: 5px 10px;
  cursor: pointer;
}
.empty-cart {
  padding: 20px;
  color: #555;
}

.empty-cart p {
  font-size: 18px;
  margin-bottom: 20px;
}

.btn-continue-shopping {
  background-color: #0c713d;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.btn-continue-shopping:hover {
  background-color: #004d00;
}
</style>