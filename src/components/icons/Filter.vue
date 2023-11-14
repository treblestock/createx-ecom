<script setup lang="ts">

</script>

<template>
  <div class="wrapper">
    <svg class="icon icon-idle"
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 9.5C7.05228 9.5 7.5 9.94771 7.5 10.5L7.5 21.75C7.5 22.3023 7.05229 22.75 6.5 22.75C5.94772 22.75 5.5 22.3023 5.5 21.75L5.5 10.5C5.5 9.94771 5.94772 9.5 6.5 9.5Z" fill="currentColor"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 1.25C7.05228 1.25 7.5 1.69772 7.5 2.25V5.25C7.5 5.80228 7.05228 6.25 6.5 6.25C5.94771 6.25 5.5 5.80228 5.5 5.25V2.25C5.5 1.69772 5.94772 1.25 6.5 1.25Z" fill="currentColor"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1 7.25C1 5.59315 2.34315 4.25 4 4.25H9C10.6569 4.25 12 5.59315 12 7.25V8.5C12 10.1569 10.6569 11.5 9 11.5H4C2.34315 11.5 1 10.1569 1 8.5V7.25ZM4 6.25C3.44772 6.25 3 6.69772 3 7.25V8.5C3 9.05228 3.44772 9.5 4 9.5H9C9.55228 9.5 10 9.05228 10 8.5V7.25C10 6.69772 9.55228 6.25 9 6.25H4Z" fill="currentColor"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 17.75C18.0523 17.75 18.5 18.1977 18.5 18.75V21.75C18.5 22.3023 18.0523 22.75 17.5 22.75C16.9477 22.75 16.5 22.3023 16.5 21.75V18.75C16.5 18.1977 16.9477 17.75 17.5 17.75Z" fill="currentColor"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 1.25C18.0523 1.25 18.5 1.69772 18.5 2.25V13.5C18.5 14.0523 18.0523 14.5 17.5 14.5C16.9477 14.5 16.5 14.0523 16.5 13.5V2.25C16.5 1.69772 16.9477 1.25 17.5 1.25Z" fill="currentColor"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 15.5C12 13.8431 13.3431 12.5 15 12.5H20C21.6569 12.5 23 13.8431 23 15.5V16.75C23 18.4069 21.6569 19.75 20 19.75H15C13.3431 19.75 12 18.4069 12 16.75V15.5ZM15 14.5C14.4477 14.5 14 14.9477 14 15.5V16.75C14 17.3023 14.4477 17.75 15 17.75H20C20.5523 17.75 21 17.3023 21 16.75V15.5C21 14.9477 20.5523 14.5 20 14.5H15Z" fill="currentColor"/>
    </svg>
    <svg class="icon icon-active"
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 9.5C18.0523 9.5 18.5 9.94771 18.5 10.5V21.75C18.5 22.3023 18.0523 22.75 17.5 22.75C16.9477 22.75 16.5 22.3023 16.5 21.75L16.5 10.5C16.5 9.94771 16.9477 9.5 17.5 9.5Z" fill="currentColor"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 1.25C18.0523 1.25 18.5 1.69772 18.5 2.25V5.25C18.5 5.80228 18.0523 6.25 17.5 6.25C16.9477 6.25 16.5 5.80228 16.5 5.25V2.25C16.5 1.69772 16.9477 1.25 17.5 1.25Z" fill="currentColor"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.25C12 5.59315 13.3431 4.25 15 4.25H20C21.6569 4.25 23 5.59315 23 7.25V8.5C23 10.1569 21.6569 11.5 20 11.5H15C13.3431 11.5 12 10.1569 12 8.5V7.25ZM15 6.25C14.4477 6.25 14 6.69772 14 7.25V8.5C14 9.05228 14.4477 9.5 15 9.5H20C20.5523 9.5 21 9.05228 21 8.5V7.25C21 6.69772 20.5523 6.25 20 6.25H15Z" fill="currentColor"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 17.75C7.05228 17.75 7.5 18.1977 7.5 18.75V21.75C7.5 22.3023 7.05229 22.75 6.5 22.75C5.94772 22.75 5.5 22.3023 5.5 21.75V18.75C5.5 18.1977 5.94772 17.75 6.5 17.75Z" fill="currentColor"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 1.25C7.05228 1.25 7.5 1.69772 7.5 2.25V13.5C7.5 14.0523 7.05228 14.5 6.5 14.5C5.94772 14.5 5.5 14.0523 5.5 13.5V2.25C5.5 1.69772 5.94772 1.25 6.5 1.25Z" fill="currentColor"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1 15.5C1 13.8431 2.34315 12.5 4 12.5H9C10.6569 12.5 12 13.8431 12 15.5V16.75C12 18.4069 10.6569 19.75 9 19.75H4C2.34315 19.75 1 18.4069 1 16.75V15.5ZM4 14.5C3.44772 14.5 3 14.9477 3 15.5V16.75C3 17.3023 3.44772 17.75 4 17.75H9C9.55228 17.75 10 17.3023 10 16.75V15.5C10 14.9477 9.55228 14.5 9 14.5H4Z" fill="currentColor"/>
    </svg>
  </div>



</template>

<style scoped>
@import "~css/consts";

.wrapper {
  color: $color-white;
  &:hover, &._hover, &._active {
    color: $color-white;
    & .icon-idle {
      display: none;
    }
  }

  &:not(&:hover, &._hover, &._active) .icon-active {
    display: none;
  }
}
.icon {
  color: inherit;
}


</style>