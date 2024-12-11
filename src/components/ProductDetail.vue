<template>
  <div v-if="product" class="product-detail">
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
    <p><strong>Price:</strong> {{ formatPrice(product.price * 1000) }}</p>
    
    <!-- Nút Add to Cart -->
    <button @click="addToCart(product)">Add to Cart</button>
  </div>
  <div v-else class="loading">
    <p>Loading product details...</p>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  data() {
    return {
      product: null,
    };
  },
  async created() {
    const productId = this.$route.params.id; // Lấy ID sản phẩm từ URL
    try {
      const product = await this.$store.dispatch('fetchProductById', productId); // Lấy sản phẩm từ Vuex action
      if (product) {
        this.product = product;
      } else {
        console.error('Không tìm thấy sản phẩm!');
      }
    } catch (error) {
      console.error('Lỗi khi lấy sản phẩm:', error);
    }
  },
  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat().format(price); // Định dạng giá
    },
    addToCart(product) {
      this.$store.dispatch('addToCart', product); // Gọi action addToCart từ Vuex
      this.$router.push('/cart'); // Sau khi thêm vào giỏ, chuyển hướng tới trang giỏ hàng
    }
  }
};
</script>

<style scoped>
.product-detail {
  max-width: 600px;
  margin: 200px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.product-detail h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.product-detail p {
  font-size: 16px;
}

.product-detail button {
  padding: 10px 15px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.product-detail button:hover {
  background-color: #218838;
}

.loading {
  text-align: center;
  font-size: 18px;
  padding: 20px;
}
</style>