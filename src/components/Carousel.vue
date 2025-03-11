<template>
  <div class="carousel">轮播图内容</div>
</template>

<script>
export default {
  name: 'CarouselComponent',
  beforeUnmount() { // 替换 beforeDestroy
    console.log('清理轮播图资源');
  },
};
</script>

<style scoped>
.carousel {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
}
</style>
