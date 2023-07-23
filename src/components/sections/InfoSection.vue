<script setup lang="ts">
import { ref } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
</script>

<template>
  <section id="info-section">
    <div class="container">
      <div class="content">
        <div class="content__header">
          <h2 class="section__title title">
            Ремонт телевизоров
            <span>
              в сервисе на дому
            </span>
          </h2>
          <p class="section__subtitle subtitle">
            Мы ремонтируем телевизоры по возможности на дому в вашем присутствии, 
            в сервис забираем только при серьезных поломок так как сложный ремонт
            должен проводиться в специально оборудованном месте.
          </p>
        </div>
        <div class="content__body">
          <div class="notify-block">
            <h6 class="notify-block__title">
              <span>!</span>
              Ремонт в сервисном центре и на дому
            </h6>
            <p class="notify-block__text">
              Самым важным условием качественного ремонта является 
              <span>
                современное оборудование, которое имеется в нашем распоряжении.
              </span>
            </p>
            <p class="notify-block__text">
              Благодаря ему мы проводим 
              <span>
                высокоточную диагностику и профессиональный ремонт
              </span>
              в максимально сжатые сроки.
            </p>
          </div>
        </div>
        <div class="content__footer">
          <h2 class="section__subtitle">
            Посмотрите какие инструменты используются для диагностики и ремонта:
          </h2>
          <div class="carousel-wrapper">
            <Carousel :autoplay="2000" :itemsToShow="3" :wrapAround="true" :transition="1000">
              <Slide v-for="slide in 10" :key="slide">
                <div class="carousel__item">{{ slide }}</div>
              </Slide>

              <template #addons>
                <Navigation />
                <Pagination />
              </template>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#info-section {
  .content {
    &__header {
      margin-bottom: 32px;
    }

    &__body {
      .notify-block {
        width: 512px;
        padding: 10px;
        margin-bottom: 32px;
        border: 2px solid $gray300;

        &__title {
          margin-bottom: 12px;
          font-weight: 600;

          span {
            color: $error600;
          }
        }

        &__text {
          margin-bottom: 12px;

          span {
            font-weight: 600;
            color: #2bb0d4;
          }

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
