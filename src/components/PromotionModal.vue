<template>
  <div v-if="isVisible" class="modal-overlay">
    <div class="modal-content">
      <button class="close-button" @click="closeModal">×</button>
      <img :src="imageUrl" alt="Promotion" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      imageUrl: "//theme.hstatic.net/200000421745/1000900421/14/popup_contact_banner.jpg?v=180",
    };
  },
  methods: {
    openModal() {
      this.isVisible = true;
    },
    closeModal() {
      this.isVisible = false;
    },
  },
  mounted() {
    setTimeout(() => {
      this.openModal();
    }, 5000); 
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  text-align: center;
}
.modal-content img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
.close-button {
  position: absolute;
  top: 2px;
  right: 5px;
  background: none;
  border: none;
  font-size: 26px;
  cursor: pointer;
  color: #333;
}
.close-button:focus {
  outline: none;
}
</style>
