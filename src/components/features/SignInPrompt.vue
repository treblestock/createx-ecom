<script setup lang="ts">
import IconProfile from '~/assets/img/icons/decor/Profile.svg'

</script>

<template>
  <div class="sign-in-prompt">
    <IconProfile class="icon"></IconProfile>
    Already have an account?  <AppLink class="link" @click.prevent="$router.$showPopup('Signin')">Sign in</AppLink>  for faster checkout experience
  </div>
</template>

<style scoped>
@import "~css/consts";

.sign-in-prompt {
  padding: 1.6rem 2rem;
  color: $color-green;
  background: $color-green-transparent;


}
.icon {
  margin-right: 1rem;
  vertical-align: middle;
}

.link {
  font-weight: 700;
  text-decoration: underline;
}


</style>