<template>
  <div class="item-container">
    <div v-for="(item, index) in products" :key="index" class="item">
      <div>Name: {{ item.title }}</div>
      <img :src="item.image" alt="" :style="{ width: '200px' }" />
      <div>Price: {{ item.price }}</div>
      <button @click="addItemsToCart(item)">Add to chart</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['addItemsToCart']),
  },
  computed: {
    ...mapState(['products']),
  },
}
</script>

<style>
.item-container {
  max-width: 1200px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.item {
  margin: 20px;
  padding: 20px 10px;
  background-color: rgb(170, 170, 170);
}
</style>
