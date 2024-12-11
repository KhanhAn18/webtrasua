<template>
   <div class="banner-section"></div>

<div class="content-container">
    <div class="info-section">
        <div class="info-text">
            <h1 class="info-title" style="color: rgb(143, 40, 40);">CÂU CHUYỆN THƯƠNG HIỆU</h1>
            <p>Tên gọi Tea Milk xuất phát từ ý nghĩa trong tiếng Hoa là Trà cung đình. Thời xưa, các loại trà tốt nhất thường được các vị hoàng thân quý tộc ngự dùng. Ngày nay, Tea Milk mong muốn phục vụ các loại trà tốt nhất cho thực khách, cũng như chính tên gọi của thương hiệu. Kể từ khi được thành lập vào năm 2006 tại Đài Loan, chuỗi cửa hàng Tea Milk đã mở rộng trên khắp 19 quốc gia với 1.500 cửa hàng và con số này vẫn tiếp tục tăng trưởng không ngừng. Qua nhiều năm nỗ lực phát triển, Tea Milk đã trở nên phổ biến với khách hàng từ nhiều quốc gia và trở thành một trong những thương hiệu trà đáng tin cậy hàng đầu trên thế giới.</p>
        </div>
        <div class="image-right">
            <img src="Images/Info/tra.png" class="img-right" alt="Trà">
        </div>
    </div>
</div>

<div class="noiDung">
    <div class="header-content">
        <h1 class="header-title" style="color: rgb(143, 40, 40); text-align:center">GIÁ TRỊ CỐT LÕI</h1>
    </div>
    <div class="row">
        <div class="value-item">
            <div class="header-content">
                <img src="Images/Info/icon1.png" alt="Chất lượng hàng đầu" class="icon-image">
            </div>
            <div class="value-content">
                <h4 style="color: rgb(143, 40, 40);">1. CHẤT LƯỢNG HÀNG ĐẦU</h4>
                <p>An toàn, vệ sinh và ngon miệng. Việc sử dụng các nguyên liệu an toàn, tự nhiên và vệ sinh là ưu tiên hàng đầu của Gong Cha. Hương vị tuyệt hảo của các món thức uống là mục đích quan trọng tiếp theo mà chúng tôi muốn hướng đến.</p>
            </div>
        </div>

        <div class="value-item">
            <img src="Images/Info/icon2.png" alt="Dịch vụ thân thiện & chuyên nghiệp" class="icon-image">
            <div class="value-content">
                <h4 style="color: rgb(143, 40, 40);">2. DỊCH VỤ THÂN THIỆN & CHUYÊN NGHIỆP</h4>
                <p>Gong Cha mong muốn làm hài lòng khách hàng tốt nhất với tác phong phục vụ chuyên nghiệp và thân thiện, luôn lắng nghe những đóng góp của khách hàng.</p>
            </div>
        </div>

        <div class="value-item">
            <img src="Images/Info/icon3.png" alt="Thương hiệu đáng tin cậy" class="icon-image">
            <div class="value-content">
                <h4 style="color: rgb(143, 40, 40);">3. THƯƠNG HIỆU ĐÁNG TIN CẬY</h4>
                <p>Dựa trên hai nền tảng cốt lõi là Chất Lượng và Dịch Vụ, Gong Cha luôn nỗ lực xây dựng và duy trì hình ảnh thương hiệu đáng tin cậy trong mắt khách hàng.</p>
            </div>
        </div>
    </div>
</div>

</template>
<script>
export default {
    name:'ComGioiThieu'
}
</script>

<style>
.banner-section {
    background-image: url('/public/Images/menu2.png');
    background-size: contain;
    margin-top: 120px;
    min-height: 300px;
}

.content-container {
    width: 100%;
}
.info-section {
    padding: 30px 150px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.info-text {
    flex: 0 0 auto;
    width: 75%;
    text-align: left;
}
.info-text h1 {
    font-size: 40px;
    margin-top: 0px;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
}
.info-text p {
    margin-top: 0px;
    margin-bottom: 16px;
    text-align: justify;
    max-width: 650px;
    line-height: 1.2;
}
.image-right img{
    width: 100%;
}
.noiDung {
    background-color: bisque;
    padding-bottom: 50px;
    padding-left: 0%;
    padding-right: 2%;
    padding-bottom: 7%;
}
.header-content h1 {
    color: rgb(143, 40, 40);
    text-align: center;
    padding-top: 18px;
}
.row {
    margin: 0;
    padding: 0;
}
.value-item {
}
</style>