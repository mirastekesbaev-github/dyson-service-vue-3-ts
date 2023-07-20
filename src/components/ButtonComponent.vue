<script setup lang="ts">
const props = defineProps<{
  btnName: string
}>()

console.log('props', props)
</script>

<template>
  <button class="button-component">{{ btnName }}</button>
</template>

<style lang="scss" scoped>

</style>
