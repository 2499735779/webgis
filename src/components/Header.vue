<template>
  <header class="header">
    <div class="logo">京东</div>
    <input type="text" placeholder="搜索商品..." class="search-bar" />
    <button class="search-button">搜索</button>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent', // 多单词名称
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  background-color: #e2231a;
  color: white;
}
.logo {
  font-size: 24px;
  font-weight: bold;
}
.search-bar {
  flex: 1;
  margin: 0 10px;
  padding: 8px;
  border: none;
  border-radius: 4px;
}
.search-button {
  padding: 8px 16px;
  background-color: white;
  color: #e2231a;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
