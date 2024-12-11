<template>
   <section id="footer">
        <div class="contact-info">
            <div class="first-info">
                <img src="/Images/logo.webp" alt="">

                <div class="map">
                    <i class="fa-solid fa-location-dot"></i>
                    <span>An Dương Vương, Phường 3, Quận 5</span>
                </div>

                <div class="phone">
                    <i class="fa-solid fa-phone-volume"></i>
                    <span>0325459901</span>
                </div>
                <div class="mail">
                    <i class="fa-solid fa-envelope"></i>
                    <span>doanhdaigr5.2004@gmail.com</span>
                </div>

            </div>

            <div class="second-info">
                <h4>CHÍNH SÁCH </h4>
                <ul>
                    <li><a href="#">Chính sách bảo mật</a></li>
                    <li><a href="#">Chính sách giao hàng</a></li>
                    <li><a href="#">Chính sách thẻ thành viên</a></li>
                    <li><a href="#">Điều khoản sử dụng</a></li>
                </ul>
            </div>

            <div class="third-info">
                <h4>ABOUT US</h4>
                <ul>
                    <li><a href="#">Giới thiệu</a></li>
                    <li><a href="#">Tuyển dụng</a></li>
                    <li><a href="#">Nhượng quyền</a></li>
                    <li><a href="#">Tin tức</a></li>
                </ul>
            </div>

            <div class="fourth">
                <h4>FOLLOW US</h4>
                <a href=""><i id="fb" class="fa-brands fa-facebook"></i></a>
                <a href=""><i id="ig" class="fa-brands fa-instagram"></i></a>
                <a href=""><i id="tw" class="fa-brands fa-square-twitter"></i></a>
                <a href=""><img src="/Images/logo_bct.webp" alt=""></a>
            </div>


        </div>
        <div class="footer-bottom">
            <p>
                Copyrights © 2024 by comebuy_vn. All rights reserved.
            </p>
        </div>
    </section>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.min.css';

export default {

}
</script>

<style>
/* -------footer------- */

#footer{
    background-color: beige;
    padding-top: 40px;
    position: relative;
    align-items: center;
}

.contact-info{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, auto));
    gap: 3rem;
    padding-bottom: 30px;
    border-bottom: 1.5px solid #1a1a1c;
    align-items: center;

}

.first-info img{
    width: 140px;
    height: auto;
    margin-bottom: 20px;
}

.contact-info h4{
    color: rgb(11, 11, 11);
    font-size: 14px;
    text-transform: uppercase;
    margin-bottom: 15px;
}

.first-info div{
    margin-bottom: 10px;
}

.first-info span{
    color: #565656;
    font-size: 14px;
    text-transform: capitalize;
    line-height: 1.5;
    cursor: pointer;
}

.contact-info a:not(.fourth a){
    color: #565656;
    font-size: 14px;
    text-transform: capitalize;
    line-height: 1.8;
    margin-bottom: 10px;
    display: block;
    cursor: pointer;
    transition: color 0.2s ease;
}

.contact-info span:hover {
    color: #ff8a6c;
}


.contact-info a:not(.fourth a):hover {
    color: #ff8a6c;
}
.contact-info .first-info i{
    color: #000008;
    border: 1px solid #000008;
    display: inline-block;
    border-radius: 50%;
    line-height: 30px;
    text-align: center;
    margin-right: 10px;  
    width: 30px;
    height: 30px;
}

 #fb,#tw,#git,#ig{
    color: #fff;
    background-color: #18191f;
    font-size: 24px;
    box-shadow: 2px 2px 2px #00000080, 10px 1px 12px #00000080, 2px 2px 10px #00000080, 
    2px, 2px, 3px #00000080, inset 2px 2px 10px #000008,inset 2px 2px 10px #000008,
    inset 2px 2px 10px #000008,inset 2px 2px 10px #000008;
    border-radius: 5px;
    padding: 5px 5px;
    margin: 20px 20px 0 0;
    animation: animate 3s linear infinite;
    text-shadow: 0 0 20px #0072ff, 0 0 50px #0072ff, 0 0 70px #0072ff, 0 0 100px #0072ff;
}

#tw{
    animation-delay: 0.7s;
}
#ig{
    animation-delay: 0.5s;
}

#git{
    animation-delay: 0,2s;

}
.fourth {
    margin-right: 130px;
}
.footer-bottom {
    display: flex;
    font-size: 14px;
    justify-content: center;
    align-items: center;
    height: 50px;
}

@keyframes animate{
    from{
        filter: hue-rotate(0deg);
    }
    to{
        filter: hue-rotate(360deg);
    }
}

.contact-info .fourth img{
    position: relative;
    display: block;
    max-width: 150px;
    height: auto;
    margin-top: 40px;
}

/* Thêm CSS cho nút toggle trên điện thoại */
.nav-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    color: #ff8a6c !important;
    font-size: 24px;
    color: rgb(0, 0, 0);
    padding: 0;
    margin: 15px 10px 0 0;
}

</style>