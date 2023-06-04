<script setup lang="ts">
import img from '~/assets/img/illustrations/2.png'
import { ref } from 'vue'


type sexCategories = 'woman' | 'man' | 'girls' | 'boys'
const selectedSexCategories = ref<Set<sexCategories>>(new Set())
const email = ref<string>('')
const isMailingAllowed = ref<boolean>(true)


function onSubmit(event: Event) {
  console.log(event)
}
</script>

<template>
  <form class="form"
    @submit.prevent="onSubmit"
  >
    <div class="title h1">Subscribe for updates</div>
    <div class="text text_xl">Subscribe for exclusive early sale access and new arrivals.</div>
    <div class="checkboxes">
      <CheckboxBtn class="checkbox"
        v-model="selectedSexCategories"
        value="woman"
      >woman</CheckboxBtn>
      <CheckboxBtn class="checkbox"
        v-model="selectedSexCategories"
        value="man"
      >man</CheckboxBtn>
      <CheckboxBtn class="checkbox"
        v-model="selectedSexCategories"
        value="girls"
      >girls</CheckboxBtn>
      <CheckboxBtn class="checkbox"
        v-model="selectedSexCategories"
        value="boys"
      >boys</CheckboxBtn>
    </div>

    <div class="email-and-submit">
      <InputGroup class="email-group"
        v-model="email"
        placeholder="Your working email"
      >Email</InputGroup>
      <Btn class="submit-btn"
        type="submit"
      >
        Subscribe
      </Btn>
    </div>

    <CheckboxGroup class="agree"
      v-model="isMailingAllowed"
    >
      I agree to receive communications from Createx Store.
    </CheckboxGroup>
  </form>

  
</template>

<style scoped>
@import '~css/consts';



.form {
}
.title {
  margin-bottom: 2.4rem;
}
.text {
  margin-bottom: 3.2rem;
}
.checkboxes {
  margin-bottom: 3.2rem;

  display: flex;
  gap: 1.2rem;
}
.checkbox {
  :deep(.btn) {
    background: transparent;
    box-shadow: 0 0 0 $border-w $color-gray-400;
    color: $color-gray-700;
    font-weight: 700;
  }
}
.email-and-submit {
  margin-bottom: 2.4rem;

  display: flex;
  align-items: flex-end;
}
.email-group {
  flex: 1 1 auto;

  :deep(.input) {
    background: transparent;
    box-shadow: 0 0 0 $border-w $color-gray-400;
    color: $color-gray-700;
    font-weight: 700;
  }
}
.submit-btn {

}
.agree {
  :deep(.input:before) {
    background: transparent;
    box-shadow: 0 0 0 1px $color-gray-700;
    color: $color-gray-700;
    font-weight: 700;
  }
}



</style>