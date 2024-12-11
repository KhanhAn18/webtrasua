<template>
  <div>
    <ComLoading :isLoading="loading" />
    <Header />
    <PromotionModal />
    <Footer />
    <FloatingIcons />
  </div>
</template>

<script>
import Header from './components/ComHeader.vue';
import Footer from './components/ComFooter.vue';
import PromotionModal from './components/PromotionModal.vue';
import FloatingIcons from './components/FloatingIcons.vue';
import ComLoading from './components/ComLoading.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    PromotionModal,
    FloatingIcons,
    ComLoading,
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
   
    setTimeout(() => {
      this.loading = false;
    }, 2000); 
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>