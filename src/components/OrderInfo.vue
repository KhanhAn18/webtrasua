<template>
  <div class="order-form">
    <div class="progress-bar">
      <div class="step">Chọn sản phẩm</div>
      <div class="step">Thông tin đặt hàng</div>
      <div class="step">Thanh toán</div>
      <div class="step">Hoàn tất đơn hàng</div>
    </div>

    <div class="form-section">
      <h3>Thông tin khách hàng</h3>
      <input type="text" v-model="formValues.name" @blur="handleBlur" placeholder="Họ và tên (bắt buộc)" />
      <span v-if="formErrors.name">{{ formErrors.name }}</span>

      <input type="text" v-model="formValues.phone" @blur="handleBlur" placeholder="Số điện thoại (bắt buộc)" />
      <span v-if="formErrors.phone">{{ formErrors.phone }}</span>

      <input type="email" v-model="formValues.email" @blur="handleBlur" placeholder="Email" />
      <span v-if="formErrors.email">{{ formErrors.email }}</span>

      <h3>Nhập địa chỉ của bạn</h3>
      <input type="text" v-model="formValues.address" @blur="handleBlur" placeholder="Nhập địa chỉ của bạn" />
      <span v-if="formErrors.address">{{ formErrors.address }}</span>

      <input type="text" placeholder="Yêu cầu khác" />

      <button class="btn-continue" @click="handleSubmit">TIẾP TỤC</button>
      <button class="btn-add-more">CHỌN THÊM SẢN PHẨM KHÁC</button>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  setup() {
    const router = useRouter();
    const store = useStore();

    const formValues = reactive({
      name: '',
      email: '',
      phone: '',
      address: '',
    });
    const formErrors = reactive({});
    const isSubmit = ref(false);

    const handleBlur = () => {
      isSubmit.value = false;
      validateForm();
    };

    const handleSubmit = () => {
      validateForm();
      isSubmit.value = true;
      if (Object.keys(formErrors).length === 0) {
        store.dispatch('addDataCustomer', formValues);
        router.push('/cart/payment'); // Chuyển đến trang thanh toán
      }
    };

    const validateForm = () => {
      const errors = {};
      const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
      if (!formValues.name) errors.name = 'Họ tên không được để trống!';
      if (!formValues.email) {
        errors.email = 'Email không hợp lệ!';
      } else if (!emailRegex.test(formValues.email)) {
        errors.email = 'Email không hợp lệ!';
      }
      if (!formValues.phone) {
        errors.phone = 'Số điện thoại không được để trống!';
      } else if (formValues.phone.length < 10) {
        errors.phone = 'Số điện thoại không hợp lệ!';
      }
      if (!formValues.address) {
        errors.address = 'Địa chỉ không được để trống!';
      }
      Object.assign(formErrors, errors);
    };

    return {
      formValues,
      formErrors,
      isSubmit,
      handleBlur,
      handleSubmit,
    };
  },
};
</script>

<style scoped>
.order-form {
  max-width: 600px;
  margin: auto;
  margin-top: 120px;
  padding: 20px;
}

.progress-bar {
  display: flex;
  justify-content: space-around;
  background-color: #d1f7d1;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.step {
  text-align: center;
  font-weight: bold;
  color: #333;
}

.form-section {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-section h3 {
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.form-section input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 14px;
}

.btn-continue {
  width: 100%;
  padding: 12px;
  background-color: #007f2d;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
}

.btn-add-more {
  width: 100%;
  padding: 12px;
  background-color: white;
  color: #007f2d;
  font-weight: bold;
  border: 1px solid #007f2d;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
}
</style>