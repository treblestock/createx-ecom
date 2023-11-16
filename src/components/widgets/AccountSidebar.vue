<script setup lang="ts">
import IconFavourite from '~/assets/img/icons/decor/heart.svg'
import IconBag from '~/assets/img/icons/decor/bag.svg'
import IconProfile from '~/assets/img/icons/decor/Profile.svg'
import IconEye from '~/assets/img/icons/decor/Eye.svg'
import IconStar from '~/assets/img/icons/decor/star.svg'
import IconSignout from '~/assets/img/icons/decor/Logout.svg'


import useStoreAuth from '~/stores/auth'
const authStore = useStoreAuth()

function signout() {
  authStore.signout()
}




</script>

<template>
  <aside class="account-sidebar">
    <div class="sidebar-item user-bio">
      <div class="user-name text_xl">Anne Block</div>
      <div class="user-email">annetteb@example.com</div>
    </div>
    <AppLinkBtn class="sidebar-item btn_outlined _with-icon"
      :to="{name: 'accountProfile'}"
    >
      <IconProfile></IconProfile>
      My profile
    </AppLinkBtn>
    <AppLinkBtn class="sidebar-item btn_outlined _with-icon"
      :to="{name: 'accountOrders'}"
    >
      <IconBag></IconBag>
      My orders
    </AppLinkBtn>
    <AppLinkBtn class="sidebar-item btn_outlined _with-icon"
      :to="{name: 'accountFavourite'}"
    >
      <IconFavourite></IconFavourite>
      Wishlist
    </AppLinkBtn>
    <AppLinkBtn class="sidebar-item btn_outlined _with-icon"
      :to="{name: 'accountRecientlyViewed'}"
    >
      <IconEye></IconEye>
      Reciently viewed
    </AppLinkBtn>
    <AppLinkBtn class="sidebar-item btn_outlined _with-icon"
      :to="{name: 'accountReviews'}"
    >
      <IconStar></IconStar>
      My reviews
    </AppLinkBtn>
    <Btn class="sidebar-item btn_outlined _with-icon"
      @click="signout"
    >
      <IconSignout></IconSignout>
      sign out
    </Btn>
  </aside>
</template>

<style scoped>
@import "~css/consts";


$shadow-btn: inset 1px 1px 0 0 $color-gray-400, 1px 1px 0 0 $color-gray-400, $shadow-card;
.account-sidebar {
  max-width: 28.5rem;
}
.sidebar-item {
  width: 100%;
}
.user-bio {
  padding: 2rem;
  box-shadow: $shadow-btn;
}
.user-name {
  color: $color-gray-800;
  font-weight: 700;
}
.user-email {
  color: $color-gray-700;
}
.btn {
  display: flex;
  justify-content: start;

  color: $color-gray-800;

  box-shadow: $shadow-btn;
}
_with-icon {
}

</style>