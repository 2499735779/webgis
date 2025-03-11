<template>
  <div id="app">
    <Header /> <!-- 引入 Header 组件 -->
    <Carousel />
    <Categories />
    <Recommendations />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Carousel from './components/Carousel.vue';
import Categories from './components/Categories.vue';
import Recommendations from './components/Recommendations.vue';

export default {
  name: 'App',
  components: {
    Header,
    Carousel,
    Categories,
    Recommendations,
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5; /* 背景色，便于查看页面内容 */
}
</style>
