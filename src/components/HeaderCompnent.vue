<template>
  <header class="header">
    <div class="container">
      <div class="header__body">
        <div class="header__logo">
          <img src="" alt="">
        </div>
        <nav class="header__menu">
          <ul>
            <li>
              <a href="#">Что сломалось?</a>
              <a href="#">Цены</a>
              <a href="#">Преимущества</a>
              <a href="#">Отзывы</a>
            </li>
          </ul>
        </nav>
        <div class="header__">
          <div class="header__contact">
            <div class="header__number">+7 707 555-30-27</div>
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

  &__body {
    display: flex;
    justify-content: space-between;
  }
}
</style>
