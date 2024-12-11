<template>
  <div class="product-detail">
    <div class="product-detail-content">
      <div class="product-image">
        <img :src="product.image" alt="Product Image" />
      </div>
      <div class="product-info">
        <h1 class="product-title">{{ product.title }}</h1>
        <p class="product-price">{{ product.price }} đ</p>
        <div class="product-actions">
          <button @click="addToCart(product)" class="add-to-cart-button">Add cart</button>
        </div>
      </div>
    </div>
    <div class="product-description-section">
      <h2>Mô tả sản phẩm</h2>
      <p>{{ product.desc }}</p>
    </div>
  </div>
</template>

<script>
import products from "@/data/monAn";

export default {
  name: "ProductDetail",
  data() {
    return {
      product: null
    };
  },
  created() {
    const productId = this.$route.params.id;
    this.product = products.find(p => p.id === parseInt(productId));
  }
};
</script>

<style scoped>
.product-detail {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}

.product-detail-content {
  display: flex;
  gap: 20px;
  margin-top: 100px;
}

.product-image img {
  width: 400px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}

.product-info {
  flex: 1;
}

.product-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.product-price {
  color: #B5292F;
  font-size: 20px;
  margin-bottom: 20px;
}

.product-description {
  margin-bottom: 20px;
  color: #666;
}

.product-actions {
  margin-top: 20px;
}

.add-to-cart-button {
  background-color: #B5292F;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-to-cart-button:hover {
  background-color: #9a2227;
}

.product-description-section {
  margin-top: 30px;
}

.product-description-section h2 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>