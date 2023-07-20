<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
</script>

<template>
  <section id="start-section">
    <div class="container h100">
      <div class="content h100 flex fdc jcc">
        <h2 class="title">Ремонт телевизоров на дому с гарантией 3 года</h2>
        <ul class="list">
          <li class="item">
            <span></span>
            <p class="text">Бесплатный выезд мастера на дом</p>
          </li>
          <li class="item">
            <span></span>
            <p class="text">Бесплатная диагностика за 15 мин</p>
          </li>
          <li class="item">
            <span></span>
            <p class="text">Ремонт за 1 день</p>
          </li>
          <li class="item">
            <span></span>
            <p class="text">Бесплатная доставка в сервис и обратно</p>
          </li>
          <li class="item">
            <span></span>
            <p class="text">Оригинальные запчасти для всех моделей</p>
          </li>
        </ul>
        <div>
          <ButtonComponent btn-name="Вызвать мастера" />
        </div>
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
  height: calc(100vh - 86px);

  .content {
    .title {
      margin-bottom: 16px;
      font-size: 46px;
      font-weight: 700;
      line-height: 100%;
    }

    .list {
      margin-bottom: 22px;
      .item {
        position: relative;
        padding-left: 42px;
        .text {
          font-size: 28px;
          font-weight: 400;
          line-height: 126%;
        }
      }

      .item::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 30px;
        height: 30px;
        background-image: url("src/assets/icons/check-double-line.svg");
      }
    }
  }
}
</style>
