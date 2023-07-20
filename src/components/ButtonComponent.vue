<script setup lang="ts">
defineProps<{
  btnName: string
}>()
</script>

<template>
  <button class="button-component">{{ btnName }}</button>
</template>

<style lang="scss" scoped>
.button-component {
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  background: linear-gradient(21deg, #dd03e4, #5611ec);
  display: inline-block;
  position: relative;
  padding: 14px 26px;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  transition: .2s linear;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    transform: scale(0.96);
  }
}
</style>
