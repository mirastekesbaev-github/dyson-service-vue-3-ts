<script setup lang="ts">
import HeaderComponent from './components/header/HeaderCompnent.vue'
import FooterComponent from './components/footer/FooterComponent.vue'
import StartSection from './components/sections/StartSection.vue'
import ProductSection from './components/sections/ProductSection.vue'
import OrderSection from './components/sections/OrderSection.vue'
import FacilitySection from './components/sections/FacilitySection.vue'
import QuerySection from './components/sections/QuerySection.vue'
import ContactSection from './components/sections/ContactSection.vue'
</script>

<template>
  <HeaderComponent />
  <main>
    <StartSection />
    <ProductSection />
    <OrderSection />
    <FacilitySection />
    <QuerySection />
    <ContactSection />
  </main>
  <FooterComponent />
</template>

<style lang="scss" scoped>

</style>
