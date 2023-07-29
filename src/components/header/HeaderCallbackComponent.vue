<script setup lang="ts">
interface Props {
    textAlign?: string
}

withDefaults(defineProps<Props>(), {
    textAlign: 'tar' 
})
</script>

<template>
  <div class="header-callback__contact mb8">
    <a href="tel: +7 707 555-30-27">
      +7 707 555-30-27
    </a>
  </div>
  <div class="header-callback__timetable" :class="textAlign">
    Работаем с 9:00 до 20:00
  </div>
</template>

<style lang="scss" scoped>
  .header-callback__contact {
    display: block;
    a {
      font-size: 24px;
      font-weight: 900;
      color: $gray900;
      &:hover {
        text-decoration: none;
      }
    }
  }

  .header-callback__timetable {
    font-size: 14px;
  }
</style>