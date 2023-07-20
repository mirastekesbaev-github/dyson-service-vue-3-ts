<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
</script>

<template>
  <header class="header pt10 pb10">
    <div class="container">
      <div class="header__body flex aic jcsb pt10 pb10">
        <div class="header__logo">
          <img src="../../assets/img/dyson-logo.png" alt="dyson">
        </div>
        <nav class="header__menu">
          <ul class="list flex aic">
            <li class="item">
              <a href="#" class="item-link">Что сломалось?</a>
            </li>
            <li class="item">
              <a href="#" class="item-link">Цены</a>
            </li>
            <li class="item">
              <a href="#" class="item-link">Преимущества</a>
            </li>
            <li class="item">
              <a href="#" class="item-link">Отзывы</a>
            </li>
          </ul>
        </nav>
        <div class="flex aic jcsb">
          <div class="mr10 pr10">
            <div class="header__contact mb10">
              <a href="tel: +7 707 555-30-27">+7 707 555-30-27</a>
            </div>
            <div class="header__timetable">Работаем с 9:00 до 20:00</div>
          </div>
          <ButtonComponent btn-name="Перезвоните мне" />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  height: 86px;

  &__logo {
    width: 100px;
    height: 38px;
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  &__menu {
    .list {
      .item {
        margin: {
          right: 14px;
          left: 14px;
        }
        .item-link {
          position: relative;
          font-size: 18px;
          font-weight: 400;
          color: $gray900;
          text-decoration: none;
          transition: .2s linear;
          &:hover {
            background: -webkit-linear-gradient(21deg, #dd03e4, #5611ec);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          &::after {
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 1px;
            bottom: 0;
            left: 0;
            background: linear-gradient(21deg, #dd03e4, #5611ec);
            transform-origin: bottom right;
            transition: transform .2s ease-out;
          }

          &:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }
        }
      }
    }
  }

  &__contact {
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

  &__timetable {
    text-align: right;
  }
}
</style>
