<template>
  <div class="payment-container">
    <div class="payment-content">
      <h1 class="payment-title">Thanh Toán</h1>
      <div class="order-summary">
        <h2>Đơn hàng của bạn</h2>
        <div class="order-items">
          <div v-for="item in cart" :key="item.id" class="order-item">
            <img :src="item.image" :alt="item.name" class="item-image">
            <div class="item-details">
              <h3>{{ item.name }}</h3>
              <p class="quantity">Số lượng: {{ item.quantity }}</p>
              <p class="price">{{ formatPrice(calculateItemTotal(item)) }}</p>
            </div>
          </div>
        </div>
        <div class="order-total">
          <div class="subtotal">
            <span>Tạm tính:</span>
            <span>{{ formatPrice(calculateSubtotal) }}</span>
          </div>
          <div class="shipping">
            <span>Phí vận chuyển:</span>
            <span>{{ formatPrice(shippingCost) }}</span>
          </div>
          <div class="total">
            <span>Tổng cộng:</span>
            <span>{{ formatPrice(calculateTotal) }}</span>
          </div>
        </div>
      </div>
      <div class="payment-form">
        <h2>Thông tin thanh toán</h2>
        <form @submit.prevent="processPayment">
          <div class="form-group">
            <label>Số thẻ</label>
            <input v-model="cardNumber" type="text" placeholder="1234 5678 9012 3456" maxlength="19"
              @input="formatCardNumber" required>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Ngày hết hạn</label>
              <input v-model="expiryDate" type="text" placeholder="MM/YY" maxlength="5" @input="formatExpiryDate"
                required>
            </div>
            <div class="form-group">
              <label>CVV</label>
              <input v-model="cvv" type="text" placeholder="123" maxlength="3" required>
            </div>
          </div>
          <div class="form-group">
            <label>Tên chủ thẻ</label>
            <input v-model="cardHolder" type="text" placeholder="NGUYEN VAN A" required>
          </div>
          <button type="submit" class="pay-button" :disabled="!isFormValid">
            Thanh toán {{ formatPrice(calculateTotal) }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import carts from '../data/cart'
import orderHistory from '../data/orderHistory'

export default {
  data() {
    return {
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardHolder: '',
      shippingCost: 30000,
      currentUser: null,
      cart: []
    }
  },
  computed: {
    calculateSubtotal() {
      return this.cart.reduce((total, item) => {
        return total + this.calculateItemTotal(item)
      }, 0)
    },
    calculateTotal() {
      return this.calculateSubtotal + this.shippingCost
    },
    isFormValid() {
      return this.cardNumber.length === 19 &&
        this.expiryDate.length === 5 &&
        this.cvv.length === 3 &&
        this.cardHolder.length > 0
    }
  },
  created() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
    if (!this.currentUser) {
      this.$router.push('/login')
    } else {
      this.cart = carts[this.currentUser.username] || []
      if (this.cart.length === 0) {
        this.$router.push('/cart')
      }
    }
  },
  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
      }).format(price)
    },
    calculateItemTotal(item) {
      const basePrice = item.price * 1000
      const sizePrice = item.selectedSize ?
        (item.sizes.find(s => s.label === item.selectedSize)?.price || 0) * 1000 : 0
      return (basePrice + sizePrice) * item.quantity
    },
    formatCardNumber(e) {
      let value = e.target.value.replace(/\D/g, '')
      value = value.replace(/(\d{4})/g, '$1 ').trim()
      this.cardNumber = value
    },
    formatExpiryDate(e) {
      let value = e.target.value.replace(/\D/g, '')
      if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2)
      }
      this.expiryDate = value
    },
    processPayment() {
      Swal.fire({
        title: 'Đang xử lý...',
        text: 'Vui lòng chờ trong giây lát',
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading()
        }
      })

      setTimeout(() => {
        if (this.currentUser) {
          const newOrder = {
            id: Date.now(),
            date: new Date().toISOString(),
            items: [...this.cart],
            total: this.calculateTotal,
          }

          if (!orderHistory[this.currentUser.username]) {
            orderHistory[this.currentUser.username] = []
          }

          orderHistory[this.currentUser.username].push(newOrder)

          carts[this.currentUser.username] = []
        }

        Swal.fire({
          icon: 'success',
          title: 'Thanh toán thành công!',
          text: 'Cảm ơn bạn đã mua hàng',
          confirmButtonText: 'OK'
        }).then(() => {
          this.$router.push('/orders')
        })
      }, 3000)
    }
  }
}
</script>

<style scoped>
.payment-container {
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.payment-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  background: white;
  padding: 40px;
  border-radius: 12px;
}

.payment-title {
  grid-column: 1 / -1;
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  font-size: 2em;
  font-weight: bold;
}

.order-summary {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 8px;
}

.order-items {
  margin: 20px 0;
  max-height: 400px;
  overflow-y: auto;
}

.order-item {
  display: flex;
  gap: 15px;
  padding: 15px;
  border-bottom: 1px solid #eee;
}

.item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
}

.item-details {
  flex: 1;
  text-align: left;
}

.item-details h3 {
  margin: 0 0 5px;
  font-size: 16px;
}

.quantity {
  color: #666;
  font-size: 14px;
}

.price {
  color: #e44d26;
  font-weight: bold;
  margin-top: 5px;
}

.order-total {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid #ddd;
}

.order-total>div {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.total {
  font-weight: bold;
  font-size: 1.2em;
  color: #e44d26;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #ddd;
}

.payment-form {
  padding: 30px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #ddd;
}

.form-group {
  margin-bottom: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-weight: 500;
  text-align: left;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

input:focus {
  border-color: #8B4513;
  outline: none;
}

.pay-button {
  width: 100%;
  padding: 15px;
  background: #8B4513;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pay-button:hover {
  background: #693410;
}

.pay-button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .payment-content {
    grid-template-columns: 1fr;
  }
}
</style>
