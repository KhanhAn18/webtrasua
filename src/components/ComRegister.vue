<template>
  <div class="dangKy">
    <h2>Đăng ký tài khoản</h2>
    <div class="input-group">
      <label for="username">Tên đăng nhập</label>
      <input v-model="username" id="username" placeholder="Tên đăng nhập" />
    </div>
    <div class="input-group">
      <label for="password">Mật khẩu</label>
      <input v-model="password" type="password" id="password" placeholder="Mật khẩu" />
    </div>
    <div class="input-group">
      <label for="confirmPassword">Xác nhận mật khẩu</label>
      <input v-model="confirmPassword" type="password" id="confirmPassword" placeholder="Xác nhận mật khẩu" />
    </div>
    <button @click="register">Đăng ký</button>
    <p v-if="error" class="error">{{ error }}</p>
    <p v-if="success" class="success">{{ success }}</p>
  </div>
</template>

<script>
import users from '@/data/users';

export default {
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
      error: "",
      success: "",
      users: users || []  // Initialize with existing data or an empty array
    };
  },
  methods: {
    register() {
      // Check if password and confirm password match
      if (this.password !== this.confirmPassword) {
        this.error = "Mật khẩu không trùng";
        this.success = "";
        return;
      }

      // Check if the username already exists
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const existUser = users.find((user) => user.username === this.username);
      if (existUser) {
        this.error = "Tên đăng nhập đã tồn tại";
        this.success = "";
        return;
      }

      // Create a new user and add to the list
      const newUser = {
        id: users.length + 1,
        username: this.username,
        password: this.password
      };
      users.push(newUser);

      // Save to localStorage
      localStorage.setItem('users', JSON.stringify(users));

      // Registration successful
      this.success = "Đăng ký thành công!";
      this.error = "";
      this.username = "";
      this.password = "";
      this.confirmPassword = "";

      // Redirect to the login page after 1 second
      setTimeout(() => {
        this.$router.push('/login');
      }, 1000);
    }
  }
};
</script>

<style scoped>
.dangKy {
  margin-top: 150px;
  margin-bottom: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px; /* Increased max-width for larger form */
  padding: 30px; /* Increased padding for more spacious form */
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
}

.dangKy h2 {
  margin-bottom: 25px;
  font-size: 28px; /* Increased font size */
  color: #dda71d;
}

.input-group {
  margin-bottom: 20px; /* Spacing between input fields */
  width: 100%;
}
label {
  float: left;
}
.input-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 16px; /* Increased font size for labels */
  color: #333;
}

.input-group input {
  width: 100%;
  padding: 12px; /* Increased padding for inputs */
  font-size: 18px; /* Increased font size */
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
  padding: 12px; /* Larger padding for button */
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 18px; /* Larger font size for button */
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

.error, .success {
  font-size: 16px; /* Larger font size for messages */
  text-align: center;
  margin-top: 15px;
}

.error {
  color: red;
}

.success {
  color: green;
}
</style>