<script setup lang="ts">
import MobileSidebar from '~/components/features/MobileSidebar.vue'
import AccountSidebar from '~/components/widgets/AccountSidebar.vue'


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
  <div class="account">
    <div class="container">
      <AccountSidebar class="sidebar"
        v-if="!isSidebarMobile"
      ></AccountSidebar>

      <MobileSidebar v-else
        :isShown="isSidebarOpen"
        @open="isSidebarOpen = true"
        @close="isSidebarOpen = false"
        @toggle="isSidebarOpen = !isSidebarOpen"
      >
        <AccountSidebar class="mobile-sidebar"
          @click="closePopup"
        ></AccountSidebar>
      </MobileSidebar>

      <RouterView class="reviews"></RouterView>
    </div>
  </div>
</template>

<style scoped>
@import '~css/consts';

.account .container{
  padding: 4rem 2rem;

  display: flex;
  justify-content: space-between;
  gap: var(--leng-60);
}
.sidebar {
  flex: 0 0 28.5rem;
}
.reviews {
  flex: 1 1 auto;
}


.mobile-sidebar {
  width: 80vw;
  max-width: 39rem;

}

</style>