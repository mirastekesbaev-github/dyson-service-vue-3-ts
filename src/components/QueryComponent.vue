<script setup lang="ts">
import { ref, computed } from 'vue'

defineProps<{
  title: string,
  info: string
}>()

const expanded = ref(false);
const contentStyle = computed(() => {
    return { "max-height": expanded.value ? "100px" : 0 };
});

const infoStyle = computed(() => {
    return { opacity: expanded.value ? 1 : 0 };
});
</script>

<template>
  <div class="query-item" @click="expanded = !expanded">
    <header class="query-item__header flex aic jcsb">
      <h4 class="query-item__title flex aic jcsb mb0">
        {{ title }}
      </h4>
      <button class="btn">
        <svg v-show="expanded" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M5 11V13H19V11H5Z" />
        </svg>
        <svg v-show="!expanded" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" />
        </svg>
      </button>
    </header>
    <div :style="contentStyle" class="query-item__content">
      <p :style="infoStyle" class="query-item__info">{{ info }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.query-item {
  padding: 24px 12px;
  border-bottom: 1px solid $gray400;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &__title {
    font-size: 20px;
    font-weight: 500;
  }

  &__content {
    max-height: 0;
    transition: max-height 0.35s ease-out;
  }

  &__info {
    z-index: -1;
    transition: opacity 0.35s ease-out;
  }
  .btn {
    background: transparent;
    border-color: transparent;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-left: 1rem;
    align-self: center;
    min-width: 2rem;
    z-index: 1;
  }
}
</style>
