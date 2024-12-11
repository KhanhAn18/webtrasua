// orderConfirmation.js

// Khởi tạo các biến cần thiết
let name = '';
let phone = '';
let instructions = '';
let selectedPaymentMethod = 'MoMo';
let agreedTerms = false;

const items = [
  { name: 'Trà Xanh Đường Đen', quantity: 2, price: 65000 },
];

const paymentMethods = ['Tiền mặt', 'MoMo', 'ZaloPay', 'ShopeePay', 'Thẻ ngân hàng'];
const shippingFee = 18000;
const discount = 0;

// Hàm tính tổng tiền
function calculateTotal() {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

// Hàm tính tổng tiền cuối cùng sau khi cộng phí giao hàng và trừ giảm giá
function calculateFinalAmount() {
  return calculateTotal() + shippingFee - discount;
}

// Định dạng tiền tệ
function formatCurrency(value) {
  return value.toLocaleString();
}

// Xử lý đặt hàng
function placeOrder() {
  if (!agreedTerms) {
    alert("Vui lòng đồng ý với điều khoản và điều kiện.");
    return;
  }
  alert("Đặt hàng thành công!");
}

// Xóa đơn hàng
function clearOrder() {
  items.length = 0;
}

// Để sử dụng các hàm và biến này trong ứng dụng của bạn, bạn có thể export chúng nếu cần
export {
  name,
  phone,
  instructions,
  selectedPaymentMethod,
  agreedTerms,
  items,
  paymentMethods,
  shippingFee,
  discount,
  calculateTotal,
  calculateFinalAmount,
  formatCurrency,
  placeOrder,
  clearOrder
};
