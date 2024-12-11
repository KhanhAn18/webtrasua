<template>
    <div class="floating-icons">
        <!-- First icon with call button -->
        <div class="ring">
            <div class="quickcallbtn">
                <div class="phone-ring">
                    <div class="quick-alo-circle"></div>
                    <div class="quick-alo-circle-fill"></div>
                    <div class="quick-alo-circle-img">
                        <i class="fa-solid fa-phone"></i>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="ring">
            <div class="quickcallbtn">
                <div class="phone-ring">
                    <div class="quick-alo-circle"></div>
                    <div class="quick-alo-circle-fill"></div>
                    <div class="quick-alo-circle-img">
                        <i class="fa-brands fa-facebook-messenger"></i>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    name: "FloatingIcons",
};
</script>

<style scoped>
.page {
    position: relative;
}

.floating-icons {
    position: fixed;
    top: 90%;
    right: 3%;
    z-index: 200;
    display: flex;
    flex-direction: column;
    gap: 20px; 
}

.ring {
    background: #1a1919;
    border-radius: 50%;
    display: flex;
    align-items: center;
    padding: 0 8px;
    position: relative;
}

.text-call {
    display: flex;
    align-items: center;
    height: 50px;
    margin-left: 35px;
    color: #fff;
    font-size: 1.4rem;
    font-weight: 500;
}

.quickcallbtn .phone-ring {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.quick-alo-circle {
    width: 120px;
    height: 120px;
    position: absolute;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0.1;
    border: 2px solid rgb(13, 110, 60);
    animation: quick-alo-circle-anim 1.2s infinite ease-in-out;
    transition: all 0.5s;
}

.quick-alo-circle-fill {
    width: 70px;
    height: 70px;
    position: absolute;
    background-color: rgb(13, 110, 60);
    border-radius: 50%;
    opacity: 0.1;
    animation: quick-alo-circle-fill 2.3s infinite ease-in-out;
    transition: all 0.5s;
}

.quick-alo-circle-img {
    width: 50px;
    height: 50px;
    background-color: #0c3;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
    animation: quick-alo-circle-img 1s infinite ease-in-out;
    transition: all 0.5s;
}

.quick-alo-circle-img i {
    color: #fff;
    font-size: 24px;
}

/* Animations */
@keyframes quick-alo-circle-fill {
    0% {
        transform: rotate(0) scale(0.7) skew(1deg);
        opacity: 0.2;
    }
    50% {
        transform: rotate(0) scale(1) skew(1deg);
        opacity: 0.2;
    }
    100% {
        transform: rotate(0) scale(0.7) skew(1deg);
        opacity: 0.2;
    }
}

@keyframes quick-alo-circle-anim {
    0% {
        transform: rotate(0) scale(0.5) skew(1deg);
        opacity: 0.1;
    }
    30% {
        transform: rotate(0) scale(0.7) skew(1deg);
        opacity: 0.5;
    }
    100% {
        transform: rotate(0) scale(1) skew(1deg);
        opacity: 0.1;
    }
}

@keyframes quick-alo-circle-img {
    0% {
        transform: rotate(0) scale(1) skew(1deg);
    }
    10% {
        transform: rotate(-25deg) scale(1) skew(1deg);
    }
    20% {
        transform: rotate(25deg) scale(1) skew(1deg);
    }
    30% {
        transform: rotate(-25deg) scale(1) skew(1deg);
    }
    40% {
        transform: rotate(25deg) scale(1) skew(1deg);
    }
    50% {
        transform: rotate(0) scale(1) skew(1deg);
    }
    100% {
        transform: rotate(0) scale(1) skew(1deg);
    }
}

@media only screen and (max-width: 768px) {
    .floating-icons {
        right: 10%;
    }
    .text-call {
        display: none;
    }
}
</style>