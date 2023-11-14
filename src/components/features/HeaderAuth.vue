<script setup lang="ts">
import useStoreAuth from '~/stores/auth'
const authStore = useStoreAuth()

import useStoreVueRouter from '~/stores/vueRouter'
const vueRouterStore = useStoreVueRouter()


const isAuth = computed(() => {
  return authStore.isAuth
})




function signin() {
  vueRouterStore.requestSignin()
}
function signup() {
  vueRouterStore.requestSignup()
}
function signout() {
  authStore.signout()
}




</script>

<template>
  <div class="auth">
    <!-- <Icon icon="Profile"></Icon>
    <span>Log in / Register</span> -->
    <template v-if="!isAuth">
      <button class="auth-button" 
        @click="signin"
      >
        sing in
      </button>
      <span>/</span>
      <button class="auth-button" 
        @click="signup"
      >
        sign up
      </button>
    </template>
    <button class="auth-button" 
      v-else @click="signout"
    >
      sing out
    </button>
  </div>  
</template>

<style scoped>
@import "~css/consts";
.auth {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;
}


.auth-button {
  &:hover {
    color: $color-white;
  }
}

</style>