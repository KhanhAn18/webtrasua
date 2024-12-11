<template>
  <div>
    <p>HIỂN THỊ TẤT CẢ SẢN PHẨM</p>
    <div class="product-container">
      <Product
        v-for="item in products"
        :key="item.id"
        :product="item"
        class="product-card"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Product from "./ComProduct.vue";

export default {
  name: "ComHome",
  components: {
    Product
  },
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get('http://localhost:3000/api/items'); 
        this.products = response.data;
      } catch (error) {
        console.error("Có lỗi xảy ra khi lấy dữ liệu:", error);
      }
    }
  }
}
</script>