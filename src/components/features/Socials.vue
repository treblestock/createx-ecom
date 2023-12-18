<script setup lang="ts">
import IconFacebook from '~/assets/img/icons/socials/fb.svg'
import IconInst from '~/assets/img/icons/socials/inst.svg'
import IconTwitter from '~/assets/img/icons/socials/tw.svg'
import IconLinkedIn from '~/assets/img/icons/socials/in.svg'
import IconPinterest from '~/assets/img/icons/socials/pint.svg'
import IconYoutube from '~/assets/img/icons/socials/yt.svg'


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
    <AppLink class="link">
      <IconPinterest class="icon"></IconPinterest>
    </AppLink>
    <AppLink class="link">
      <IconYoutube class="icon"></IconYoutube>
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

  :deep(.icon-color) {
    color: $color-gray-700;
  }
  :deep(.icon-bgc) {
    color: $color-gray-700;
    opacity: .12;
  }

  &:hover {
    :deep(.icon-color) {
      color: $color-green;
    }
    :deep(.icon-bgc) {
      color: $color-green;
      opacity: .12;
    } 
  }
}

._dark {
  & .icon {
    :deep(.icon-color) {
      color: $color-white;
    }
    :deep(.icon-bgc) {
      color: $color-white;
      opacity: .12;
    }

    &:hover {
      :deep(.icon-color) {
        color: $color-gray-800;
      }
      :deep(.icon-bgc) {
        color: $color-white;
        opacity: 1;
      } 
  }
  }
}


</style>