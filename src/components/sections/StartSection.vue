<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'

const scroll = () => {
  console.log('scroll')
  console.log(this.$refs)
  window.scrollTo({
    top: 2000,
    behavior: 'smooth'
  })
}
</script>

<template>
  <section id="start-section">
    <div class="container h100">
      <div class="content h100 flex fdc jcc">
        <h2 class="title">Ремонт всей техники Dyson с гарантией 3 года</h2>
        <ul class="list">
          <li class="item">
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                    d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772
                    21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999
                    11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"
                    fill="rgba(52,166,132,1)"
                />
              </svg>
            </span>
            <p class="text">Бесплатный выезд мастера на дом</p>
          </li>
          <li class="item">
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                    d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772
                    21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999
                    11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"
                    fill="rgba(52,166,132,1)"
                />
              </svg>
            </span>
            <p class="text">Бесплатная диагностика за 15 мин</p>
          </li>
          <li class="item">
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                    d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772
                    21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999
                    11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"
                    fill="rgba(52,166,132,1)"
                />
              </svg>
            </span>
            <p class="text">Бесплатная доставка в сервис и обратно</p>
          </li>
          <li class="item">
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                    d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772
                    21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999
                    11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"
                    fill="rgba(52,166,132,1)"
                />
              </svg>
            </span>
            <p class="text">Оригинальные запчасти на всю технику</p>
          </li>
        </ul>
        <div>
          <ButtonComponent btn-name="Вызвать мастера" @click="scroll" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#start-section {
  z-index: 0;
  position: relative;
  background-image: url("src/assets/img/dyson7.3.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: calc(100vh - 86px);

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:rgba(0, 0, 0, .6);
  }

  .content {
    .title {
      z-index: 10;
      margin-bottom: 16px;
      font-size: 46px;
      font-weight: 700;
      line-height: 100%;
      color: #fff;
    }

    .list {
      margin-bottom: 22px;
      .item {
        position: relative;
        display: flex;
        align-items: center;
        margin-bottom: 6px;
        .icon {
          z-index: 10;
          margin-right: 8px;
          svg {
            width: 32px;
            height: 32px;
          }
        }

        .text {
          font-size: 28px;
          font-weight: 400;
          line-height: 126%;
          color: #fff;
        }
      }

      .item::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(23%, -53%);
        width: 22px;
        height: 22px;
        background: #fff;
      }
    }
  }
}
</style>
