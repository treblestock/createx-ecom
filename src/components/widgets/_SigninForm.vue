<script setup lang="ts">
import Socials from '~/components/features/Socials.vue'

const name = ref<string>('')
const password = ref<string>('')
const keepSignedIn = ref<boolean>(true)


function onSubmit(event: Event) {
  console.log(event)
}
</script>

<template>
  <form class="form"
    @submit.prevent="onSubmit"
  >
    <h3 class="form__title h3">Sign in</h3>
    <div class="form__description">Sign in to your account using email and password provided during registration.</div>
    <InputGroup class="form__group"
      v-model="name"
    >Full Name</InputGroup>
    <PasswordGroup class="form__group"
      v-model="password"
    >Password</PasswordGroup>
    <div class="form__group _split">
      <CheckboxGroup
        v-model="keepSignedIn"
      >Remember me</CheckboxGroup>
      <div class="link">forgot Password?</div>
    </div>

    <Btn class="form__submit"
      type="submit"
    >sign up</Btn>
    <div class="form__to-another-form">
      Don't have an account?
      <span class="link">Sign up</span>
    </div>

    <div class="form__footer">
      <Socials class="form__socials"></Socials>
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

    &._split {
      display: flex;
      justify-content: space-between;
    }
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