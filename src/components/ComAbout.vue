<template>
     <section class="about" id="about">
        <div class="row">
            <div class="image">
                <img src="images/me.png" alt="">
            </div>

            <div class="content">
                <h3 class="title">Điều gì làm cho TeaMilk chúng tui <br> trở nên đặc biệt</h3>
                <p>Trà sữa của chúng tôi đặc biệt nhờ sự kết hợp giữa nguyên liệu tươi ngon và kỹ thuật pha chế tinh tế, 
                mang lại hương vị thơm ngon và độc đáo mà bạn khó tìm thấy ở nơi khác.</p>

                <!-- <a href="#" class="btn">read more</a> -->
                <div class="icons-container">
                    <div class="icons">
                        <img src="images/about-icon-2.png" alt="">
                        <h3>our branches</h3>
                    </div>
                    <div class="icons">
                        <img src="images/about-icon-3.png" alt="">
                        <h3>free delivery</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ComAbout'
}
</script>

<style>
:root {
    --main-color: #e6a624;
    --border-radius: 95% 4% 97% 5% / 4% 94% 3% 95%;
    --border-radius-hover: 4% 95% 6% 95% / 95% 4% 92% 5%;
    --border: 3px solid var(--main-color);
    --border-hover: 3px dashed var(--main-color);
}

section {
    padding: 20px;
}

.heading {
    font-size: 110px;
    text-transform: uppercase;
    color: #fffffe;
    -webkit-text-stroke: 1px var(--main-color);
    letter-spacing: 3px;
    text-align: center;
    pointer-events: none;
    position: relative;
}

.heading span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    color: var(--main-color);
    font-size: 40px;
    margin-top: 10px;
}

/* .btn {
    display: inline-block;
    padding: 6px;
    text-decoration: none;
    border: var(--border);
    border-radius: var(--border-radius);
    color: var(--main-color);
    background: none;
    cursor: pointer;
    margin-top: 4px;
    font-size: 12px;
}

.btn:hover {
    border-radius: var(--border-radius-hover);
    border: var(--border-hover);
} */

.about .row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 18px;
}
.about .row .image {
    flex: 1 1 600px;
}

.about .row .image img {
    width: 100%;
    animation: aboutImage 4s linear infinite;
}

@keyframes aboutImage {
    0%, 100% {
        transform: scale(0.8);
        border-radius: var(--border-radius-hover);
    }

    50% {
        transform: scale(0.7);
        border-radius: var(--border-radius);
    }
}

.about .row .content {
    flex: 1 1 500px;
}

.about .row .content .title {
    color: var(--main-color);
    font-size: 36px;
    line-height: 1.2;
}

.about .row .content p {
    color: var(--main-color);
    font-size: 20px;
    line-height: 1.5;
    padding: 22px 0;
}

.about .row .content .icons-container {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    padding-top: 24px;
}

.about .row .content .icons-container .icons {
    flex: 1 1 200px;
    padding: 8px;
    text-align: center;
    border: var(--border);
    border-radius: var(--border-radius);
}

.about .row .content .icons-container .icons img {
    height: 50px;
}

.about .row .content .icons-container .icons h3 {
    font-size: 24px;
    padding-top: 16px;
    color: var(--main-color);
}
</style>