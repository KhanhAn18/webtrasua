<template>
  <header>
    <div class="container">
        <div class="logo">
            <img src="/Images/logo.png" alt="Restaurant Logo">
        </div>
        <nav>
            <ul>
                <li><router-link to="/">Trang chủ</router-link></li>
                <li><router-link to="/thucdon">Trà sữa</router-link></li>
                <li><router-link to="/gioithieu">Giới thiệu</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/register" v-if="!user">Đăng ký</router-link></li>
                <li><router-link to="/login" v-if="!user">Đăng nhập</router-link></li>
            </ul>
        </nav>
        <div v-if="user">
            <p>Xin chào, {{ user.username }} </p>
            <button @click="logout">Đăng xuất</button>
        </div>
        <div class="cta">
            <router-link to="/cart" class="cta-button" @mouseenter="showCartSummary" @mouseleave="hideCartSummary">
                Giỏ hàng
                <span class="cart-count" v-if="cartCount > 0">{{ cartCount }}</span>
            </router-link>
            <div v-if="isCartSummaryVisible" class="cart-summary">
                <ul>
                    <li v-for="item in cart" :key="item.id">
                        {{ item.name }} - {{ item.quantity }} x {{ item.price }}₫
                    </li>
                </ul>
                <div class="total">
                    <strong>Tổng cộng: {{ totalPrice }}₫</strong>
                </div>
            </div>
        </div>
    </div>
</header>
<router-view/>
</template>

<script>
import eventBus from '@/eventBus.js'

export default {
    data() {
        return {
            user: JSON.parse(localStorage.getItem("currentUser")) || null,
            cart: JSON.parse(localStorage.getItem("cart")) || [],
            cartCount: 0,
            isCartSummaryVisible: false
        }
    },
    mounted() {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (user) {
            this.user = user;
        }
        this.updateCartCount();
    },
    created() {
        eventBus.on('loginSuccess', (user) => {
            this.user = user;
        })
    },
    beforeUnmount() {
        eventBus.off('loginSuccess')
    },
    methods: {
        logout() {
            localStorage.removeItem('currentUser');
            this.user = null;
            this.cart = [];
            localStorage.removeItem('cart');
            this.$router.push('/');
        },
        updateCartCount() {
            this.cartCount = this.cart.reduce((total, item) => total + item.quantity, 0);
        },
        showCartSummary() {
            this.isCartSummaryVisible = true;
        },
        hideCartSummary() {
            this.isCartSummaryVisible = false;
        }
    },
    computed: {
        totalPrice() {
            return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
        }
    }
}
</script>

<style scoped>
.container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 0 0 15px 15px;
}

.logo img {
    height: 65px;
    transition: transform 0.4s ease, opacity 0.3s ease;
}

.logo img:hover {
    transform: scale(1.1);
    opacity: 0.8;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 30px;
    margin: 0;
    padding: 0;
}

nav ul li {
    position: relative;
}

nav ul li a {
    position: relative;
    text-decoration: none;
    color: #ec3f3f;
    font-weight: bold;
    font-size: 18px;
    border-radius: 8px;
    letter-spacing: 0.5px;
    padding: 8px 0;
    transition: background-color 0.3s ease, transform 0.2s ease;
}
nav ul li a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #eb3b2b;
  transition: width 0.3s ease;
}
nav ul li a:hover::after {
  width: 100%;
}

nav ul li a:hover {
  color: #fc3434;
}

.cta-button {
    padding: 12px 24px;
    background-color: #ff4726;
    color: #fff;
    text-decoration: none;
    border-radius: 25px;
    font-weight: bold;
    transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
    margin-left: 30px;
    position: relative;
}

.cart-count {
    position: absolute;
    top: -5px;
    right: -10px;
    background-color: red;
    color: white;
    font-size: 12px;
    padding: 4px 6px;
    border-radius: 50%;
}

.cta-button:hover {
    background-color: #e11a1a;
    box-shadow: 0 4px 10px #eec612f5;
    transform: scale(1.05);
}

div[v-if="user"] {
    display: flex;
    align-items: center;
    color: #fff;
}

div[v-if="user"] p {
    margin-right: 15px;
    font-weight: bold;
}

button {
    padding: 8px 20px;
    background-color: #fcb034;
    color: #fff;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

button:hover {
    background-color: #d48700;
    box-shadow: 0 4px 8px rgba(212, 135, 0, 0.4);
}

.cart-summary {
    position: absolute;
    top: 50px;
    right: 0;
    width: 250px;
    background-color: white;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 9999;
}

.cart-summary ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.cart-summary ul li {
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
}

.cart-summary .total {
    margin-top: 10px;
    text-align: center;
    font-weight: bold;
}

@media (max-width: 768px) {
    .container {
        flex-direction: column;
        padding: 15px;
    }

    nav ul {
        flex-direction: column;
        align-items: center;
    }

    nav ul li {
        margin: 8px 0;
    }

    .cta-button {
        margin: 20px 0 0;
    }
}
</style>