<script setup lang="ts">
import QueryComponent from '@/components/QueryComponent.vue'

const queries = [
{
    id: 1,
    title: "Сколько длится ремонт?",
    info: "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
  },
  {
    id: 2,
    title: "Как проходит ремонт?",
    info: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
  },
  {
    id: 3,
    title: "Как проходит контроль качества?",
    info: "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
  },
  {
    id: 4,
    title: "Когда нельзя починить?",
    info: "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
  },
  {
    id: 5,
    title: "Какие марки вы ремонтируете?",
    info: "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan",
  }
]
</script>

<template>
  <section id="query-section">
    <div class="container flex jcc">
      <div class="content">
        <div class="content__header">
          <h2 class="section__title title tac">
            Процесс ремонта
          </h2>
        </div>
        <div class="content__body">
          <QueryComponent 
            v-for="query in queries"
            :key="query.id"
            :title="query.title"
            :info="query.info"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#query-section {
  background-color: $gray50;
  .content {
    width: 700px;

    &__header {
      
    }
  }
}

</style>
