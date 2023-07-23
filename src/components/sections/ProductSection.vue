<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import ProductComponent from '@/components/ProductComponent.vue'
</script>

<template>
  <section id="product-section">
    <div class="container">
      <div class="content">
        <div class="content__header">
          <h2 class="section__title title tac">
            Узнайте стоимость ремонта и получите <span>скидку 2000 тг.</span> при первом обращении
          </h2>
          <p class="section__subtitle subtitle tac">
            Ответьте всего на 2 вопроса и получите предварительную стоимость работ, 
            чтобы сразу понимать как планировать свой бюджет.
          </p>    
        </div>
        <div class="content__body">
          <h4 class="title">Выберите ниже неисправность</h4>
          <div class="row gy-5">
            <div class="col-xxl-3">
              <ProductComponent />
            </div>
            <div class="col-xxl-3">
              <ProductComponent />
            </div>
            <div class="col-xxl-3">
              <ProductComponent />
            </div>
            <div class="col-xxl-3">
              <ProductComponent />
            </div>
            <div class="col-xxl-3">
              <ProductComponent />
            </div>
            <div class="col-xxl-3">
              <ProductComponent />
            </div>
            <div class="col-xxl-3">
              <ProductComponent />
            </div>
            <div class="col-xxl-3">
              <ProductComponent />
            </div>
          </div>
        </div>
        <div class="content__footer flex jcc">
          <ButtonComponent btn-name="Далее" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#product-section {
  .content {
    &__header {
      margin-bottom: 70px;
      .title {
        padding: 0 212px;
      }

      .subtitle {
        padding: 0 242px;
      }
    }

    &__body {
      margin-bottom: 32px;
      .title {
        margin-bottom: 42px;
        text-align: center;
        font-size: 28px;
        font-weight: 700;
        line-height: 100%;
      }
    }
  }
}
</style>
