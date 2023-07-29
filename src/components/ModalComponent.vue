<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { VueFinalModal } from 'vue-final-modal';
import useVuelidate from '@vuelidate/core'
import { required, minLength, helpers } from '@vuelidate/validators'
import ButtonComponent from '@/components/ButtonComponent.vue'

interface IFormData {
  name: string,
  phone: string
}

defineProps<{
  title?: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void;
}>();

const phoneNumber = ref()
const results = ref()

const formData: IFormData = reactive({
  name: '',
  phone: ''
})

const onKeyDown = (e: any) => {
  if (
    !(e.keyCode >= 48 && e.keyCode <= 57) &&
    e.keyCode !== 8 && 
    e.keyCode !== 13
  ) {
    e.preventDefault();
  }
}

const onInput = (e: Event) => {
  const { value } = <HTMLInputElement>e.target
  const digitsOnly = value.replace(/\D/g, '');

  let formattedValue = '+7 (';
  for (let i = 0; i < digitsOnly.length && i < 10; i++) {
    if (i === 3) {
      formattedValue += ') ';
    } else if (i === 6 || i === 8) {
      formattedValue += '-';
    }
    formattedValue += digitsOnly[i];
  }

  formData.phone = formattedValue;      
}

const rules = computed(() => {
  return {
    name: { 
      required: helpers.withMessage('Заполните обязательное поле!', required)
    },
    phone: { 
      required: helpers.withMessage('Заполните обязательное поле!', required),
      minLength: helpers.withMessage('Введите корректный номер!', minLength(10))
    }
  }
})

const v$ = useVuelidate(rules, formData)

const submitForm = async () => {
  const result = await v$.value.$validate()
  if (result) {
    console.log('success');
  } else {
    console.log('failed');
  }
}
</script>

<template>
  <VueFinalModal
    class="flex aic jcc"
    content-class="modal"
    content-transition="vfm-fade"
    overlay-transition="vfm-fade"
    @update:model-value="(val) => emit('update:modelValue', val)"
  >
    <button class="modal-button" @click="emit('update:modelValue', false)">
      <img src="../assets/icons/close-line.svg" alt="close">
    </button>
    <h2 class="modal-title tac">
        Заявка на обратный звонок
      </h2>
    <div class="w100">
      <form class="modal-form" @submit.prevent="submitForm">
        <div class="form-field" :class="{ 'error': v$.name.$errors.length }">
          <label for="name">Ваше имя</label>
          <input v-model="formData.name" id="name" type="text">
          <span
            v-for="error in v$.name.$errors"
            :key="error.$uid"
            class="error-text"
          >
            {{ error.$message }}
          </span>
        </div>
        <div class="form-field" :class="{ 'error': v$.phone.$errors.length }">
          <label for="phone">Ваш телефон</label>
          <input 
            v-model="formData.phone" 
            id="phone" 
            type="text"
          >
          <span
            v-for="error in v$.phone.$errors"
            :key="error.$uid"
            class="error-text"
          >
            {{ error.$message }}
          </span>
        </div>
        <ButtonComponent btn-name="Отправить" display="block" />
      </form>
    </div>
  </VueFinalModal>
</template>

<style lang="scss">
.modal {  
  position: relative;
  background-color: #fff;
  width: 460px;
  padding: 32px 32px 42px;
  border-radius: 4px;

  &-button {
    position: absolute;
    top: 14px;
    right: 14px;
    background: none;
    outline: none;
    border: none;
    width: 28px;
    height: 28px;
    margin: 0;
    padding: 0;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
    
  &-title {
    padding-top: 24px;
    padding-bottom: 18px;
    font-size: 22px;
    font-weight: 600;
    line-height: 100%;
    color: $gray700;
  }

  &-form {
    .form-field {
      margin-top: 16px;
      margin-bottom: 16px;
      display: flex;
      flex-direction: column;

      label {
        position: relative;
        display: inline-block;
        margin-bottom: 8px;

        &::after {
          content: '*';
          position: absolute;
          top: -2px;
          margin-left: 3px;
          color: $error500;
          width: 100%;
          height: 100%;
        }
      }

      input {
        z-index: 10;
        padding: 12px 12px;
        outline: none;
        border: 1px solid $gray400;
        border-radius: 4px;
        font-size: 16px;
      }

      span.error-text {
        display: block;
        margin-top: 2px;
        z-index: 0;
        font-size: 13px;
        color: $error500;
        animation: myAni 1s linear forwards;
      }

      @keyframes myAni {
        0% {
            height: 0;
        }
        100% {
            height: 100%;
        }
      }

      &.error input {
        border-color: $error500;
      }

      &:nth-child(2) {
        margin-bottom: 42px;
      }
    }
  }
}
</style>