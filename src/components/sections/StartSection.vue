<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
</script>

<template>
  <section id="start-section">
    <div class="container">
      <div class="content">
        <h2>Ремонт телевизоров на дому с гарантией 3 года</h2>
        <ul class="list">
          <li>
            <span></span>
            <p>Бесплатный выезд мастера на дом</p>
          </li>
          <li>
            <span></span>
            <p>Бесплатная диагностика за 15 мин</p>
          </li>
          <li>
            <span></span>
            <p>Ремонт за 1 день</p>
          </li>
          <li>
            <span></span>
            <p>Бесплатная доставка в сервис и обратно</p>
          </li>
          <li>
            <span></span>
            <p>Оригинальные запчасти для всех моделей</p>
          </li>
        </ul>
        <ButtonComponent btn-name="Вызвать мастера" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#start-section {
  background-image: url("src/assets/img/background.avif");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
</style>
