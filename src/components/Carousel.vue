<template>
  <div class="carousel">
    <button @click="prevImage" class="nav-button">←</button>
    <div class="carousel-content">
      <img
        :src="images[currentIndex]"
        :class="{ moveUpAndLarge: currentIndex === 0 }"
        class="carousel-image"
        alt="商品图片"
      />
    </div>
    <!-- 圆点指示器 -->
    <div class="dot-indicator">
      <span
        v-for="(image, index) in images"
        :key="index"
        class="dot"
        :class="{ active: index === currentIndex }"
        @click="goToImage(index)"
      ></span>
    </div>
    <button @click="nextImage" class="nav-button">→</button>
  </div>
</template>

<script>
export default {
  name: 'CarouselComponent',
  data() {
    return {
      images: [
        require('@/assets/手机.png'),
        require('@/assets/电脑1.png'),
        require('@/assets/电脑3.png'),
      ],
      currentIndex: 0,
      autoplayInterval: null, // 自动播放的计时器
    };
  },
  methods: {
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    goToImage(index) {
      this.currentIndex = index;
    },
    startAutoplay() {
      this.autoplayInterval = setInterval(this.nextImage, 3000); // 每3秒切换
    },
    stopAutoplay() {
      clearInterval(this.autoplayInterval);
    },
  },
  mounted() {
    this.startAutoplay(); // 页面加载时启动自动播放
  },
  beforeUnmount() {
    this.stopAutoplay(); // 页面卸载时停止自动播放
  },
};
</script>

<style scoped>
.carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 300px;
  background-color: #f0f0f0;
}
.carousel-content {
  text-align: center;
  margin-top: 200px;
}
.carousel-image {
  max-width: 60%;
  max-height: 80%;
  border-radius: 8px;
  object-fit: contain;
  transition: transform 0.3s ease, translate 0.3s ease; /* 添加过渡效果 */
}
.carousel-image.moveUpAndLarge {
  transform: scale(2) translateY(-20px); /* 放大1.2倍并向上移动20px */
}
.dot-indicator {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  gap: 10px;
}
.dot {
  width: 10px;
  height: 10px;
  background-color: #ccc;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
}
.dot.active {
  background-color: #555;
}
.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
}
.nav-button:hover {
  background-color: rgba(0, 0, 0, 0.7);
}
.nav-button:first-of-type {
  left: 10px;
}
.nav-button:last-of-type {
  right: 10px;
}
</style>
