<template>
  <div class="menu-item">
    <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">
      <img :src="product.image" alt="Product Image" />
      <div class="menu-item-info">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p class="price">{{ product.price }} VNĐ</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['product'],
}
</script>


<style scoped>
.menu-item {
  width: calc(25% - 10px);
  margin-bottom: 30px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-top: 1px solid #f1f1f1;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s;
}

.menu-item:hover {
  transform: scale(1.05);
}

.menu-item img {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #f1f1f1;
}

.menu-item-info {
  padding: 15px;
  text-align: center;
  color: #333;
}

.menu-item-info h3 {
  font-size: 18px;
  margin: 0 0 5px;
  font-weight: bold;
}

.menu-item-info p {
  font-size: 14px;
  color: #fb6805;
  margin: 5px 0;
}

.menu-item-info .price {
  font-size: 16px;
  font-weight: bold;
  color: #fcb034;
  margin-top: 10px;
}
</style>