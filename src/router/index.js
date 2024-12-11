import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/ComHome.vue'; 
import ComThucDon from '@/components/ComThucDon.vue'; 
import ComLienHe from '@/components/ComLienHe.vue'; 
import ComGioithieu from '@/components/ComGioiThieu.vue'; 
import ComAbout from '@/components/ComAbout.vue';
import ProductDetail from '@/components/ProductDetail.vue';
import ComCart from '@/components/ComCart.vue';
import OrderInfo from '@/components/OrderInfo.vue';
import ComPayment from '@/components/ComPayment.vue'; // Đảm bảo có '.vue' ở phần mở rộng
import ComLogin from '@/components/ComLogin.vue'; // Đổi tên thành 'ComLogin'
import ComRegister from '@/components/ComRegister.vue'; // Đổi tên thành 'ComRegister'
import ThanhToan from '@/components/ComThanhToan.vue';
import OrderHistory from '@/components/ComOrderHistory.vue'; // Đổi tên thành 'ComOrderHistory'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/thucdon",
    name: "ThucDon",
    component: ComThucDon
  },
  {
    path: "/lienhe",
    name: "LienHe",
    component: ComLienHe
  },
  {
    path: "/gioithieu",
    name: "GioiThieu",
    component: ComGioithieu
  },
  {
    path: "/about",
    name: "About",
    component: ComAbout
  },
  {
    path: "/product/:id", // :id sẽ nhận giá trị từ URL
    name: "ProductDetail", 
    component: ProductDetail,
  },
  {
    path: "/cart",
    name: "ComCart",
    component: ComCart
  },
  {
    path: "/orderinfo",
    name: "OrderInfo",
    component: OrderInfo
  },
  {
    path: "/compayment",
    name: "ComPayment",
    component: ComPayment
  },
  {
    path: "/login",
    name: "Login", // Tên đúng phải là 'Login' cho hợp lệ
    component: ComLogin
  },
  {
    path: "/register",
    name: "Register", // Tên đúng phải là 'Register' cho hợp lệ
    component: ComRegister
  },
  {
    path: "/thanhtoan",
    name: "ThanhToan",
    component: ThanhToan
  },
  {
    path: "/orders", // Đổi "/orders" thành "/order-history" nếu bạn muốn dùng tên rõ ràng hơn
    name: "OrderHistory", // Đổi thành 'OrderHistory' cho nhất quán
    component: OrderHistory
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
