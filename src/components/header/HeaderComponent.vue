<script setup lang="ts">
import { ref } from 'vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import ButtonPhoneComponent from '@/components/ButtonPhoneComponent.vue'

interface IMenu {
  href: string,
  name: string
}

const show = ref(false)

const menu: IMenu[] = [
  {
    href: '#',
    name: 'Что случилось?'
  },
  {
    href: '#',
    name: 'Преимущества'
  },
  {
    href: '#',
    name: 'Процесс ремонта'
  },
  {
    href: '#',
    name: 'Адрес'
  }
]
</script>

<template>
  <header class="header pt10 pb10">
    <div class="container">
      <div class="header__body flex aic jcsb pt10 pb10">
        <div class="header__logo">
          <img src="../../assets/img/dyson-logo.png" alt="dyson">
        </div>
        <div class="header__burger" @click="show = !show">
          <div class="navbar">
            <div class="nav-container">
              <input class="checkbox" type="checkbox" />
              <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
              </div>  
            </div>
          </div>
        </div>
        <nav class="header__burger-menu" :class="{ 'active': show }">
          <ul class="list">
            <li v-for="item in menu" class="item">
              <a :href="item.href" class="item-link">{{ item.name }}</a>
            </li>
          </ul>
        </nav>
        <nav class="header__menu">
          <ul class="list flex aic">
            <li v-for="item in menu" class="item">
              <a :href="item.href" class="item-link">{{ item.name }}</a>
            </li>
          </ul>
        </nav>
        <div class="header__callback flex aic jcsb">
          <div class="mr10 pr10">
            <div class="header__contact mb8">
              <a href="tel: +7 707 555-30-27">
                +7 707 555-30-27
              </a>
            </div>
            <div class="header__timetable tar">
              Работаем с 9:00 до 20:00
            </div>
          </div>
          <div class="header__button">
            <ButtonComponent btn-name="Перезвоните мне" />
          </div>
          <div class="header__phone-button">
            <ButtonPhoneComponent />
          </div>
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
  
  &__burger {
    position: relative;

    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 32px;
      height: 32px;
    }

    .nav-container {
      display: block;
      position: relative;
    }

    .nav-container .checkbox {
      position: absolute;
      display: block;
      height: 32px;
      width: 32px;
      top: -4px;
      left: -4px;
      z-index: 20;
      opacity: 0;
      cursor: pointer;
    }

    .nav-container .hamburger-lines {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      display: block;
      height: 24px;
      width: 32px;
      z-index: 10;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .nav-container .hamburger-lines .line {
      display: block;
      height: 2px;
      width: 100%;
      border-radius: 10px;
      background: #0e2431;
    }

    .nav-container .hamburger-lines .line1 {
      transform-origin: 0% 0%;
      transition: transform 0.4s ease-in-out;
    }

    .nav-container .hamburger-lines .line2 {
      transition: transform 0.2s ease-in-out;
    }

    .nav-container .hamburger-lines .line3 {
      transform-origin: 0% 100%;
      transition: transform 0.4s ease-in-out;
    }

    .nav-container input[type="checkbox"]:checked ~ .menu-items {
      transform: translateX(0);
    }

    .nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
      transform: rotate(45deg);
    }

    .nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
      transform: scaleY(0);
    }

    .nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
      transform: rotate(-45deg);
    }
  }

  &__burger-menu {
    position: fixed;
    top: 86px;
    right: 0;
    width: 360px;
    height: calc(100vh - 86px);
    padding: 24px 34px;
    background-color: lightblue;
    transition: .4s ease-out;
    transform: translateX(100%);

    &.active {
      transform: translateX(0);
    }

    .list {
      .item {
        font-size: 16px;
        padding: 8px;

        .item-link {
          text-decoration: none;
          color: $gray900;
        }
      }
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
          font-size: 16px;
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
    font-size: 14px;
  }
}

// max-width
@media screen and (max-width: 1200px) {
  .header {
    &__button {
      display: none;
    }
  }
}

@media screen and (max-width: 992px) {
  .header {
    &__menu {
      display: none;
    }

    &__callback {
      display: none;
    }
  }
}

// min-width
@media screen and (min-width: 1200px) {
  .header {
    &__phone-button {
      display: none;
    }
  }
}

@media screen and (min-width: 992px) {
  .header {
    &__burger {
      display: none;
    }
  }
}
</style>
