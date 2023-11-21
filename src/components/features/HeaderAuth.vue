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
      <button class="auth-btn" 
        @click="signin"
      >
        sing in
      </button>
      <span>/</span>
      <button class="auth-btn" 
        @click="signup"
      >
        sign up
      </button>
    </template>
    <template 
      v-else
    >
      <AppLink class="auth-btn"
      :to="{
        name: 'accountProfile'
      }">my profile</AppLink>
      <span>/</span>
      <button class="auth-btn" 
        @click="signout"
      >
        sing out
      </button>
    </template>
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


.auth-btn {
  color: inherit;
  &:hover {
    color: $color-white;
  }
}

</style>~/stores/ueRouter