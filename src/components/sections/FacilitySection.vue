<script setup lang="ts">
import FacilityComponent from '@/components/FacilityComponent.vue'
</script>

<template>
  <section id="facility-section">
    <div class="container">
      <div class="content">
        <div class="content__header">
          <h2 class="section__title title tac">
            Преимущества нашего сервисного центра
          </h2>
          <p class="section__subtitle subtitle tac">
            Наша мастерская по восстановлению телевизоров оснащена необходимым профильным
            оборудованием, что позволяет нашим специалистам устранять любые неполадки 
            в работе техники
          </p>
        </div>
        <div class="content__body">
          <div class="row">
            <div class="col-xxl-4">
              <FacilityComponent 
                icon="tools"
                title="Бесплатная диагностика"
                text="Диагноз проводится на профессиональном оборудовании"
              />
            </div>
            <div class="col-xxl-4">
              <FacilityComponent 
                icon="users"
                title="Квалифицированные мастера"
                text="Все наши мастера имеют специльное образование и большой опыт работы"
              />
            </div>
            <div class="col-xxl-4">
              <FacilityComponent 
                icon="truck"
                title="Бесплатная доставка"
                text="Мастер отвозит телевизор в сервис и привозит обратно к Вам домой совершенно бесплатно"
              />
            </div>
            <div class="col-xxl-4">
              <FacilityComponent 
                icon="file-shield"
                title="Гарантия до 3-х лет"
                text="Мы уверены в качестве своей работы и устанавливаемых запчастях, поэтому мы даём гарантию больше, чем завод изготовитель - до 36 месяцев*"
              />
            </div>
            <div class="col-xxl-4">
              <FacilityComponent 
                icon="settings"
                title="Собственный склад запчастей"
                text="Более 90% требуемых для ремонта запчастей есть на нашем складе"
              />
            </div>
            <div class="col-xxl-4">
              <FacilityComponent 
                icon="money"
                title="Оплата по факту ремонта"
                text="Никаких предоплат, платных выездов или подводных камней. Мы починили, Вы проверили и оплатили удобным способом."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#facility-section {
  .content {
    &__header {
      margin-bottom: 52px;
      .subtitle {
        padding: 0 100px;
      }
    }
  }
}
</style>
