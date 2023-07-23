<script setup lang="ts">
defineProps<{
  title: string,
  value: number
}>()
</script>

<template>
  <div class="price-item flex aic jcsb">
    <p class="price-item__title">
      {{ title }}
    </p>
    <p class="price-item__value flex aic">
      <span>от</span> 
      <span сlass="value">{{ value }}</span> 
      <span class="icon">₸</span>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.price-item {
  padding: 20px 0;
  border-bottom: 1px solid $gray400;

  &__title {
    font-size: 14px;
    text-transform: uppercase;
  }

  &__value {
    font-weight: 700;
    span {
      flex: 1 1 auto;
      margin: 0 2px;
    }
    .icon {
      font-size: 15px;
      font-weight: 700;
    }
  }
}
</style>
