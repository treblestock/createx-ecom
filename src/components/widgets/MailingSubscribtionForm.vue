<script setup lang="ts">
type SexCategories = 'woman' | 'man' | 'girls' | 'boys'

const initaialFormData = {
  selectedSexCategories: ['woman'],
  email: '',
  isMailingAllowed: true,
}
const formData = ref({...initaialFormData})


function onSubmit(event: Event) {
  console.log(formData.value)
  formData.value = {...initaialFormData}
}
</script>

<template>
  <form class="form"
    @submit.prevent="onSubmit"
  >
    <div class="title h1">Subscribe for updates</div>
    <div class="text-xl">Subscribe for exclusive early sale access and new arrivals.</div>
    <div class="checkboxes">
      <CheckboxBtn class="checkbox"
        classBtn="btn_s"
        v-model="formData.selectedSexCategories"
        value="woman"
      >woman</CheckboxBtn>
      <CheckboxBtn class="checkbox"
        classBtn="btn_s"
        v-model="formData.selectedSexCategories"
        value="man"
      >man</CheckboxBtn>
      <CheckboxBtn class="checkbox"
        classBtn="btn_s"
        v-model="formData.selectedSexCategories"
        value="girls"
      >girls</CheckboxBtn>
      <CheckboxBtn class="checkbox"
        classBtn="btn_s"
        v-model="formData.selectedSexCategories"
        value="boys"
      >boys</CheckboxBtn>
    </div>

    <div class="email-and-submit">
      <InputGroup class="email-group"
        v-model="formData.email"
        placeholder="Your working email"
      >Email</InputGroup>
      <Btn class="submit-btn"
        type="submit"
      >
        Subscribe
      </Btn>
    </div>

    <CheckboxGroup class="agree"
      v-model="formData.isMailingAllowed"
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
.text-xl {
  margin-bottom: 3.2rem;
  color: $color-gray-700;
}
.checkboxes {
  margin-bottom: 3.2rem;

  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
}
.checkbox {
  &:deep(.btn) {
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

  ::placeholder {
    color: $color-gray-600;
    font-weight: 400;
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