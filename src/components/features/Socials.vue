<script setup lang="ts">


import IconFacebook from '~/assets/img/icons/socials/fb.svg'
import IconInst from '~/assets/img/icons/socials/inst.svg'
import IconTwitter from '~/assets/img/icons/socials/tw.svg'
import IconLinkedIn from '~/assets/img/icons/socials/in.svg'
// import { socials as iconsData } from '~/public/data/different.json'

// const ICONS = [IconFacebook, IconInst, IconTwitter, IconLinkedIn]

const props = withDefaults(defineProps<{
  theme?: 'dark' | 'light'
}>(), {
  theme: 'light'
})

</script>

<template>
  <div class="socials"
    :class="{_dark: theme === 'dark'}"
  >
    <AppLink class="link">
      <IconFacebook class="icon"></IconFacebook>
    </AppLink>
    <AppLink class="link">
      <IconInst class="icon"></IconInst>
    </AppLink>
    <AppLink class="link">
      <IconTwitter class="icon"></IconTwitter>
    </AppLink>
    <AppLink class="link">
      <IconLinkedIn class="icon"></IconLinkedIn>
    </AppLink>
  </div>
</template>

<style scoped>
@import '~css/consts';
@import '~css/global';
.socials {
  display: flex;
  gap: 1.3rem;
}

.icon {
  width: 3.2rem;
  height: 3.2rem;
  color: $color-gray-700;

  &:hover {
    color: $color-green;
  }
}

.socials._dark {
  & .icon {
    color: $color-white;

    &:hover {
      color: $color-green;
    }
  }
}


</style>