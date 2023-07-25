<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
</script>

<template>
  <section id="order-section" ref="orderSection">
    <div class="container">
      <div class="content">
        <div class="content__header">
          <h2 class="section__title title tac">
            <p>Получите скидку 10% на ремонт, отправив заявку с сайта</p>
          </h2>
        </div>
        <div class="content__body flex jcc">
          <form class="order-form flex aic">
            <div class="order-form__field">
              <label class="label">Ваше имя *</label>
              <input class="input" type="text">
            </div>
            <div class="order-form__field">
              <label class="label">Ваш телефон *</label>
              <input class="input" type="text">
            </div>
            <div class="order-form__field">
              <label class="label">Что сломалось?</label>
              <input class="input" type="text">
            </div>
            <ButtonComponent btn-name="Оформить заявку" />
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#order-section {
  background-color: $primary50;

  .content {
    &__header {
      margin-bottom: 72px;
      .title {
        padding: 0 282px;
      }
    }

    &__body {
      .order-form {
        &__field {
          position: relative;
          margin-right: 12px;

          .label {
            position: absolute;
            top: -24px;
            font-size: 14px;
          }

          .input {
            padding: 16px 12px;
            font-size: 16px;
            border: none;
            outline: none;
            border-radius: 6px;
          }
        }
      }
    }
  }
}
</style>
