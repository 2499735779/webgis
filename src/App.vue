<template>
  <div id="app">
    <HeaderComponent />
    <CarouselComponent />
    <CategoriesComponent />
    <RecommendationsComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue';
import CarouselComponent from './components/Carousel.vue';
import CategoriesComponent from './components/Categories.vue';
import RecommendationsComponent from './components/Recommendations.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    CarouselComponent,
    CategoriesComponent,
    RecommendationsComponent,
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
  background-color: #f5f5f5;
}
</style>
