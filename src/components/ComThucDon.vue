<template>
  <div class="container">
    <div class="sort-options">
      <span>Sắp xếp theo:</span>
      <label>
        <input type="radio" v-model="sortOrder" value="A-Z" /> A → Z
      </label>
      <label>
        <input type="radio" v-model="sortOrder" value="Z-A" /> Z → A
      </label>
      <label>
        <input type="radio" v-model="sortOrder" value="priceAsc" /> Giá tăng dần
      </label>
      <label>
        <input type="radio" v-model="sortOrder" value="priceDesc" /> Giá giảm dần
      </label>
    </div>
  </div>

  <div class="menu-container">
    <div class="products-section">
      <div class="category-section">
        <h2 class="category-title">Danh Sách Sản Phẩm</h2>
        <div class="products-grid">
          <div class="product-card" v-for="item in paginatedProducts" :key="item.id">
            <router-link :to="{ name: 'ProductDetail', params: { id: item.id } }">
              <div class="product-image">
                <img :src="require(`@/assets/${item.image}`)" :alt="item.name">
              </div>
              <div class="product-info">
                <h3>{{ item.name }}</h3>
                <p class="description">{{ item.description }}</p>
                <p class="price">{{ formatPrice(item.price * 1000) }}</p>
                <button class="add-to-cart-btn" @click="addToCart(item)" :disabled="!item.quantity">
                  Thêm vào giỏ hàng
                </button>
              </div>
            </router-link>

          </div>
        </div>
        <div class="pagination" v-if="totalPages > 1">
          <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1" class="page-btn">
            &laquo;
          </button>
          <button v-for="page in totalPages" :key="page" @click="changePage(page)" :class="{ active: currentPage === page }" class="page-btn">
            {{ page }}
          </button>
          <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages" class="page-btn">
            &raquo;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComThucDon',
  data() {
    return {
      sortOrder: 'A-Z', 
      currentPage: 1,
      itemsPerPage: 8,
    };
  },
  computed: {
    products() {
      return this.$store.getters.allProducts;
    },

    sortedProducts() {
      return [...this.products].sort((a, b) => {
        if (this.sortOrder === 'A-Z') return a.name.localeCompare(b.name);
        if (this.sortOrder === 'Z-A') return b.name.localeCompare(a.name);
        if (this.sortOrder === 'priceAsc') return a.price - b.price;
        if (this.sortOrder === 'priceDesc') return b.price - a.price;
        return 0;
      });
    },
    // Phân trang sản phẩm
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.sortedProducts.slice(start, end);
    },
    // Tổng số trang
    totalPages() {
      return Math.ceil(this.products.length / this.itemsPerPage);
    },
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  },
  methods: {
    // Hàm đổi trang
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    // Hàm định dạng giá tiền
    formatPrice(price) {
      return new Intl.NumberFormat().format(price);
    },
    // Thêm vào giỏ hàng
    addToCart(item) {
      console.log('Thêm vào giỏ hàng:', item);
    },
  },
};
</script>


<style scoped>
.page-btn {
  padding: 10px 15px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 5px;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.page-btn:hover {
  background-color: #ccc;
}

.page-btn.active {
  background-color: #e44d26; 
  color: white;
  border-color: #e44d26; 
}


.container {
  border: 1px solid #ff8c69;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: Arial, sans-serif;
  margin: 120px 50px 0 50px;
}

.sort-options {
  display: flex;
  align-items: center;
  padding: 50px;
  gap: 50px;
}
.sort-options span {
  margin-right: 10px;
}

label {
  display: flex;
  align-items: center;
  gap: 5px;
}
.menu-container {
  display: flex;
  gap: 30px;
  padding: 42px;
  max-width: 1400px;
  margin: 0 auto;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.filter-sidebar {
  flex: 0 0 250px;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: fit-content;
  position: sticky;
  top: 20px;
  align-self: flex-start;
}

.filter-title {
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #8B4513;
  border-bottom: 2px solid #8B4513;
  padding-bottom: 10px;
}

.filter-group {
  margin-bottom: 20px;
}

.filter-group label {
  display: block;
  margin-bottom: 8px;
  color: #666;
  font-weight: 500;
}

.form-select,
.form-input {
  width: 100%;
  max-width: 200px;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.range-input {
  width: 100%;
  max-width: 200px;
  margin: 10px 0;
}

.products-section {
  flex: 1;
}

.category-section {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.category-title {
  font-size: 2em;
  color: #e9751d;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #8B4513;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.product-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  height: 200px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
img {
  
}
.product-info {
  position: relative;
  padding: 6px;
  background: #f5f6fb;
  float: left;
  width: 100%;
  top: 58px;
  transition: .3s all ease;
}
.product-info:hover {
  top: 0;
}

.product-info h3 {
  margin: 0 0 10px;
  font-size: 18px;
  color: #333;
}

.description {
  color: #666;
  font-size: 14px;
  margin-bottom: 15px;
  height: 40px;
  overflow: hidden;
}

.price {
  color: #e44d26;
  font-weight: bold;
  font-size: 16px;
  margin: 10px 0;
}

.quantity-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 15px;
}

.quantity-btn {
  width: 30px;
  height: 30px;
  border: none;
  background: #8B4513;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.quantity {
  font-size: 16px;
  min-width: 30px;
  text-align: center;
}

.add-to-cart-btn {
  width: calc(100% - 30px);
  margin: 0 15px 15px;
  padding: 10px;
  background: #8B4513;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
}

.add-to-cart-btn:hover {
  background: #e8d020;
}

a {
  text-decoration: none;
}

router-link {
  text-decoration: none;
}

@media (max-width: 768px) {
  .menu-container {
    flex-direction: column;
  }

  .filter-sidebar {
    position: static;
    width: 100%;
  }

  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
}

.page-btn {
  padding: 8px 16px;
  border: 1px solid #8B4513;
  background: white;
  color: #e1e11f;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.page-btn:hover {
  background: #8B4513;
  color: white;
}

.page-btn.active {
  background: #8B4513;
  color: white;
}
</style>