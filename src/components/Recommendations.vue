<template>
  <div class="recommendations">
    <div v-for="(item, index) in products" :key="index" class="product-card">
      <img
        :src="item.image"
        :class="{ large: item.name === '手机' }"
        alt="商品图片"
        class="product-image"
      />
      <h3 class="product-name">{{ item.name }}</h3>
      <p class="product-price">价格：{{ item.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendationsComponent',
  data() {
    return {
      products: [
        {
          name: '手机',
          price: '¥5000',
          image: require('@/assets/手机.png'),
        },
        {
          name: '电脑1',
          price: '¥8000',
          image: require('@/assets/电脑1.png'),
        },
        {
          name: '电脑3',
          price: '¥7000',
          image: require('@/assets/电脑3.png'),
        },
      ],
    };
  },
};
</script>

<style scoped>
.recommendations {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  background-color: #fff;
}
.product-card {
  width: 200px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.product-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
  border-radius: 4px;
}
.product-image.large {
  max-width: 200%; /* 放大手机图片 */
  height: auto;
  transform: translateX(-100px); /* 向左移动20px */
}
.product-name {
  font-size: 18px;
  font-weight: bold;
  margin: 5px 0;
}
.product-price {
  color: #e2231a;
  font-size: 16px;
  margin: 5px 0;
}
</style>
