<template>
  <div class="categories">
    <div class="category" v-for="category in categories" :key="category">
      {{ category }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Categories',
  data() {
    return {
      categories: ['手机', '家电', '电脑', '服饰', '图书', '美妆'],
    };
  },
};
</script>

<style scoped>
.categories {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: #f5f5f5;
}
.category {
  padding: 10px 20px;
  background-color: white;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
}
</style>
