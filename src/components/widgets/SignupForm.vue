<script setup lang="ts">
import { ref } from 'vue'

import AuthSocials from '~/components/features/AuthSocials.vue'

const name = ref<string>('')
const email = ref<string>('')
const password = ref<string>('')
const confirmPassword = ref<string>('')
const rememberMe = ref<boolean>(true)


function onSubmit(event: Event) {
  console.log(event)
}
</script>

<template>
  <form class="form"
    @submit.prevent="onSubmit"
  >
    <h3 class="form__title h3">Sign up</h3>
    <div class="form__description">Registration takes less than a minute but gives you full control over your orders.</div>
    <InputGroup class="form__group"
      v-model="name"
    >Full Name</InputGroup>
    <InputGroup class="form__group"
      v-model="email"
      type="email"
    >Email</InputGroup>
    <PasswordGroup class="form__group"
      v-model="password"
    >Password</PasswordGroup>
    <PasswordGroup class="form__group"
      v-model="confirmPassword"
    >Confirm Password</PasswordGroup>
    <CheckboxGroup class="form__group"
      v-model="rememberMe"
    >Remember me</CheckboxGroup>
    <Btn class="form__submit"
      type="submit"
    >sign up</Btn>
    <div class="form__to-another-form">
      Already have an account?
      <span class="link">Sign in</span>
    </div>

    <div class="form__footer">
      <AuthSocials class="form__socials"></AuthSocials>
    </div>
  </form>
</template>

<style scoped>
@import '~css/consts';

.form {
  width: 39rem;
  display: flex;
  flex-direction: column;

  &__title {
    margin-bottom: 2.4rem;
    text-align: center;
  }

  &__description {
    margin-bottom: 2.4rem;

    font-size: 1.4rem;
    color: $color-gray-700;
    text-align: center;
  }

  &__group {
    margin-bottom: 2rem;
  }

  &__to-another-form {
    margin-bottom: 2.4rem;
  }

  &__submit {
    margin-bottom: 2.4rem;
  }

  &__footer {
    border-top: 1px solid $color-gray-300;
    padding-top: 2.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__socials {
  }
}
.h3 {
}


</style>