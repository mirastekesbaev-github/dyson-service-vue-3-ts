<script setup lang="ts">

</script>

<template>
  <div class="product flex aic fdc">
    <div class="product__image">
        <img src="../assets/img/400.svg" alt="">
    </div>
    <p class="product__name">Название продукции</p>
  </div>
</template>

<style lang="scss" scoped>
.product {
  &__image {
    width: 100%;
    height: 100%;
    margin-bottom: 20px;

    img {
        display: block;
        width: 100%;
        height: auto;
    }
  }

  &__name {
    font-size: 16px;
  }
}
</style>
