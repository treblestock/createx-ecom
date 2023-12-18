<script setup lang="ts">
import MobileSidebar from '~/components/features/MobileSidebar.vue'
import ContactsSidebar from '~/components/widgets/ContactsSidebar.vue'



const { vw } = useViewPort()

const VW_MOBILE_SIDEBAR_APPEARS = 767
const isSidebarMobile = computed(() => vw.value <= VW_MOBILE_SIDEBAR_APPEARS)

const isSidebarOpen = ref(false)


function closePopup(evnt: Event) {
  const elem = event?.target as HTMLElement
  const isLinkClicked = elem.closest('.link') ? true : false
  if (isLinkClicked) isSidebarOpen.value = false
}
</script>

<template>
  <div class="contacts">
    <div class="container">
      <ContactsSidebar class="sidebar"
        v-if="!isSidebarMobile"
      ></ContactsSidebar>

      <MobileSidebar v-else
        :isShown="isSidebarOpen"
        @open="isSidebarOpen = true"
        @close="isSidebarOpen = false"
        @toggle="isSidebarOpen = !isSidebarOpen"
      >
        <ContactsSidebar class="mobile-sidebar"
          @click="closePopup"
        ></ContactsSidebar>
      </MobileSidebar>

      <RouterView class="subpage"></RouterView>
    </div>
  </div>
</template>

<style scoped>
@import '~css/consts';

.contacts .container{
  padding: 4rem 2rem;

  display: flex;
  gap: var(--leng-60);
}
.sidebar {
  /* flex: 0 0 28.5rem; */
  flex: 1 1 auto;
}
.subpage {
  flex: 0 1 81rem;
}

.mobile-sidebar {
  padding: 2rem;
  
  width: 80vw;
  max-width: 28rem;
}



</style>