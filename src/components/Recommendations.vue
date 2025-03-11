<template>
  <div class="recommendations">
    <h3>今日推荐</h3>
    <div class="product" v-for="product in products" :key="product.id">
      <img :src="product.image" :alt="product.name" />
      <p>{{ product.name }}</p>
      <p>¥{{ product.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommendations',
  data() {
    return {
      products: [
        { id: 1, name: '电脑1', price: 1999, image: require('@/assets/电脑1.png') },
        { id: 2, name: '电脑2', price: 4999, image: require('@/assets/电脑3.png') },
        { id: 3, name: '手机', price: 2999, image: require('@/assets/手机.png') },
      ],
    };
  },
};
</script>

<style scoped>
.recommendations {
  padding: 20px;
  background-color: #fff;
}
.product {
  display: inline-block;
  width: 150px;
  margin: 10px;
  text-align: center;
}
.product img {
  width: 100%;
  border-radius: 4px;
}
</style>
