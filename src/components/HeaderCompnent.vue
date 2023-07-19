<template>
  <header class="header">
    <div class="container">
      <div class="header__body flex aic jcsb">
        <div class="header__logo">
          <img src="../../src/assets/img/dyson-logo.png" alt="dyson">
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
        <div class="header__callback flex aic jcsb">
          <div>
            <div class="header__contact">+7 707 555-30-27</div>
            <div class="header__timetable">Работаем с 9:00 до 20:00</div>
          </div>
          <button class="header__button">Перезвоните мне</button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: {
    top: 10px;
    bottom: 10px;
  }

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
          right: 10px;
          left: 10px;
        }
        .item-link {
          font-size: 16px;
          text-decoration: none;
        }
      }
    }
  }

  &__button {
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    background: linear-gradient(21deg, #dd03e4, #5611ec);
    display: inline-block;
    position: relative;
    padding: 12px 26px;
    border: none;
    border-radius: 50px;
    font-size: 16px;
    font-weight: 600;

    &:hover {
      background-color: red;
    }
  }
}
</style>
