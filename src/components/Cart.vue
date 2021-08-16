<template>
  <div class="item-container">
    <div v-for="(item, index) in cart" :key="index" class="item">
      <div>Name: {{ item.title }}</div>
      <img :src="item.image" alt="" :style="{ width: '60px' }" />
      <div>Pcs Price: {{ item.price }}</div>
      <div>item in chart {{ item.count }}</div>
      <div>Sum {{ Math.round(item.sum * 100) / 100 }}</div>
      <div>
        <button @click="minusItem(item)">-1</button>
        <button @click="plusItem(item)">+1</button>
      </div>
    </div>
    <div>Total price {{ Math.round(cartSum * 100) / 100 }}</div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['plusItem', 'minusItem']),
  },
  computed: {
    ...mapState(['cart', 'cartSum']),
  },
}
</script>

<style scoped>
.item-container {
  display: flex;
  flex-direction: column;
}
.item {
  display: flex;
  height: 60px;
}

.item div {
  border: 1px solid black;
  margin: 0 10px;
}
</style>
