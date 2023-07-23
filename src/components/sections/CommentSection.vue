<script setup lang="ts">
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
</script>

<template>
  <section id="comment-section">
    <div class="container">
      <div class="content">
        <div class="content__header">
          <h2 class="section__title title tac">
            Отзывы клиентов
          </h2>
          <p class="section__subtitle subtitle tac">
            За 18 лет мы восстановили 8 652 устройств, их владельцы по-прежнему с нами
          </p>
        </div>
        <div class="content__body">
          <div class="carousel-wrapper">
            <Carousel :autoplay="2000" :itemsToShow="3.4" :wrapAround="true" :transition="1000">
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
#comment-section {
  .content {
    &__header {
      margin-bottom: 52px;
      .subtitle {
        padding: 0 352px;
      }
    }
  }
}
</style>
