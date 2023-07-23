<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import PriceComponent from '@/components/PriceComponent.vue'
</script>

<template>
  <section id="price-section">
    <div class="container">
      <div class="content">
        <div class="content__header">
          <h2 class="section__title title tac">Цены на ремонт</h2>
          <p class="section__subtitle subtitle tac">
            После ремонта техника проходит обязательное тестирование
          </p>
        </div>
        <div class="content__body">
          <div class="row">
            <div class="col-xxl-6">
              <PriceComponent title="Не включается" :value="2500" />
            </div>
            <div class="col-xxl-6">
              <PriceComponent title="Поврежден антенный разъем" :value="3400" />
            </div>
            <div class="col-xxl-6">
              <PriceComponent title="Выключается" :value="2500" />
            </div>
            <div class="col-xxl-6">
              <PriceComponent title="Замена подставки" :value="4200" />
            </div>
            <div class="col-xxl-6">
              <PriceComponent title="Полосы на экране" :value="4200" />
            </div>
            <div class="col-xxl-6">
              <PriceComponent title="Замена платы T-CON" :value="3400" />
            </div>
            <div class="col-xxl-6">
              <PriceComponent title="Нет сигнала" :value="3400" />
            </div>
            <div class="col-xxl-6">
              <PriceComponent title="Замена системной платы" :value="6700" />
            </div>
            <div class="col-xxl-6">
              <PriceComponent title="Рябь на изображении" :value="4200" />
            </div>
            <div class="col-xxl-6">
              <PriceComponent title="Не переключает каналы" :value="2500" />
            </div>
            <div class="col-xxl-6">
              <PriceComponent title="Нет изображения" :value="4200" />
            </div>
            <div class="col-xxl-6">
              <PriceComponent title="Не видит устройства" :value="2500" />
            </div>
            <div class="col-xxl-6">
              <PriceComponent title="Изображение темное" :value="2500" />
            </div>
            <div class="col-xxl-6">
              <PriceComponent title="Не реагирует на пульт" :value="2500" />
            </div>
            <div class="col-xxl-6">
              <PriceComponent title="Поврежден HDMI-порт" :value="3400" />
            </div>
            <div class="col-xxl-6">
              <PriceComponent title="Замена матрицы" :value="6700" />
            </div>
            <div class="col-xxl-6">
              <PriceComponent title="Нет звука" :value="3400" />
            </div>
            <div class="col-xxl-6">
              <PriceComponent title="Другие неисправности" :value="2500" />
            </div>
          </div>
        </div>
        <div class="content__footer flex jcc">
          <ButtonComponent btn-name="Заказать услугу" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#price-section {
  background-color: $gray50;

  .content {
    &__header {
      margin-bottom: 70px;
    }

    &__body {
      margin-bottom: 32px;
    }
  }
}
</style>
