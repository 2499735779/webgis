<template>
  <div class="carousel" @mouseenter="stopAutoSlide" @mouseleave="startAutoSlide">
    <div class="carousel-image-wrapper">
      <img
        :src="images[currentImage]"
        alt="轮播图"
        class="carousel-image"
        :key="currentImage"
      />
    </div>
    <button @click="prevImage" class="carousel-button left" aria-label="上一张图片">‹</button>
    <button @click="nextImage" class="carousel-button right" aria-label="下一张图片">›</button>
    <div class="dots">
      <span
        v-for="(image, index) in images"
        :key="index"
        :class="{ active: currentImage === index }"
        @click="setImage(index)"
        aria-label="'切换到第' + (index + 1) + '张图片'"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      images: [
        require('@/assets/手机.png'), // 本地图片
        require('@/assets/电脑1.png'), // 本地图片
        require('@/assets/电脑3.png'), // 本地图片
      ],
      currentImage: 0,
      interval: null,
    };
  },
  methods: {
    nextImage() {
      this.currentImage = (this.currentImage + 1) % this.images.length;
    },
    prevImage() {
      this.currentImage = (this.currentImage - 1 + this.images.length) % this.images.length;
    },
    setImage(index) {
      this.currentImage = index;
    },
    startAutoSlide() {
      this.interval = setInterval(() => {
        this.nextImage();
      }, 3000); // 每隔3秒自动切换
    },
    stopAutoSlide() {
      clearInterval(this.interval);
    },
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeDestroy() {
    this.stopAutoSlide(); // 清理定时器
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  height: 300px; /* 固定轮播图高度，可根据需求调整 */
  overflow: hidden;
  background-color: #000; /* 添加背景以区分图片外区域 */
  display: flex;
  justify-content: center;
  align-items: center; /* 水平和垂直居中整体内容 */
}
.carousel-image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center; /* 水平居中图片 */
  align-items: center; /* 垂直居中图片 */
}
.carousel-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* 保持图像比例并适配容器 */
  transition: opacity 0.5s ease-in-out; /* 添加切换动画 */
}
.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
  z-index: 10;
  padding: 10px;
  border-radius: 50%;
}
.carousel-button.left {
  left: 10px;
}
.carousel-button.right {
  right: 10px;
}
.dots {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}
.dots span {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #ccc;
  border-radius: 50%;
  cursor: pointer;
}
.dots span.active {
  background-color: white;
}
</style>
