<template>
  <div class="center">
    <div class="container">
      <form class="login-form">
        <h2>Đăng nhập tài khoản</h2>
        <div class="input-group">
          <label for="username">Tên đăng nhập</label>
          <input v-model="username" id="username" placeholder="Tên đăng nhập" />
        </div>
        <div class="input-group">
          <label for="password">Mật khẩu</label>
          <input v-model="password" type="password" id="password" placeholder="Mật khẩu" />
        </div>
        <button @click="login">Đăng nhập</button>
        <p v-if="error" class="error">{{ error }}</p>
        <div class="links">
          <router-link to="/register" class="register">Đăng ký</router-link>
          <router-link to="/forgot" class="forgot-password">Quên mật khẩu</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import eventBus from '@/eventBus.js';
export default {
  data() {
    return {
      username: '',
      password: '',
      error: '',
      user: null,
    };
  },
  methods: {
    login() {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(x => x.username === this.username && x.password === this.password);

      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.user = user;
        eventBus.emit('loginSuccess');
        
        // Thêm toast thông báo thành công
        Swal.fire({
          icon: 'success',
          title: 'Đăng nhập thành công!',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });

        this.$router.push('/');
      } else {
        this.error = 'Tên đăng nhập hoặc mật khẩu không đúng';
      }
    },
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      this.user = user;
    }
  },
};
</script>


<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  margin-bottom: 100px;
}

.container {
  width: 100%;
  max-width: 400px;
  padding: 40px; 
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15); 
  border-radius: 10px; 
}

.login-form h2 {
  margin-bottom: 25px;
  font-size: 28px; 
  color: #dda71d;
  text-align: center;
}
label {
  float: left;
}
.input-group {
  margin-bottom: 20px; 
}

.input-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  color: #333;
}

.input-group input {
  width: 100%;
  padding: 12px; 
  font-size: 18px; 
  border: 1px solid #ccc;
  border-radius: 6px;
  transition: border-color 0.3s;
}

.input-group input:focus {
  border-color: #4CAF50;
  outline: none;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 18px; 
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 15px;
}

button:hover {
  background-color: #45a049;
}

.error {
  color: red;
  font-size: 16px; 
  text-align: center;
  margin-top: 15px;
}

.links {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.links a {
  font-size: 16px; 
  color: #4CAF50;
  text-decoration: none;
}

.links a:hover {
  text-decoration: underline;
}

</style>
