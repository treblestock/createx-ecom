<script setup lang="ts">
import type { AppRouteName, TypedTo } from '~/router/types'
import HomeIcon from '~/assets/img/icons/decor/Home.svg'
import Burger from '~/components/features/Burger.vue'


type BreadCrumbData = {
  to: TypedTo
  text: string
}

import useStoreProducts from '~/stores/products'
const productsStore = useStoreProducts()
import useStoreBlogPosts from '~/stores/blogPosts'
const blogPostsStore = useStoreBlogPosts()
// key AppRouteName

const crumbsMap: Record<string, () => BreadCrumbData[]> = {
  account: () => [{
    text: 'Account',
    to: {name: 'account'}
  }],
  accountProfile: () => [{
    text: 'My profile',
    to: {name: 'accountProfile'}
  }],
  accountOrders: () => [{
    text: 'My orders',
    to: {name: 'accountOrders'}
  }], 
  accountFavourite: () => [{
    text: 'Wishlist',
    to: {name: 'accountFavourite'}
  }], 
  accountRecientlyViewed: () => [{
    text: 'Reciently viewed',
    to: {name: 'accountRecientlyViewed'}
  }], 
  accountReviews: () => [{
    text: 'My reviews',
    to: {name: 'accountReviews'}
  }], 
  contacts: () => [{
    text: 'contacts',
    to: {name: 'contacts'},
  }],
  contactsFeedback: () => crumbsMap.contacts(),
  contactsStores: () => crumbsMap.contacts(),
  contactsFAQ: () => crumbsMap.contacts(),
  checkout: () => [{
    text: 'Checkout',
    to: {name: 'checkout'}
  }], 
  blog: () => [{
    text: 'Blog',
    to: {name: 'blog'}
  }], 
  blogPost: () => {
    const postId = useRoute().params.id as string
    const blogPostName = blogPostsStore.findPost(+postId)?.title as string
    return crumbsMap.blog().concat([{
      text: blogPostName,
      to: {name: 'blogPost'}
    }])
  },
  products: () => [{
    text: 'products',
    to: {name: 'products'}
  }], 
  product: () => {
    const productId = useRoute().params.id as string
    const prodctName = productsStore.findProduct(+productId)?.name
    
    return crumbsMap.products().concat([{
      text: prodctName,
      to: {
        name: 'account',
        params: {id: productId}
      }
    }])
  },
  productDetails: () => crumbsMap.product(),
  productGeneralInfo: () => crumbsMap.product(),
  productReviews: () => crumbsMap.product(),
  trackOrder: () => [{
    text: 'Track order',
    to: {name: 'trackOrder'}
  }], 
}

const breadCrumbs = computed(() => {
  const routeName = useRoute().name
  // @ts-ignore
  const existingCrumb = crumbsMap[routeName]

  if (!existingCrumb) return []
  return existingCrumb()
})



</script>

<template>
  <div class="breadcrumbs-section"
    v-if="breadCrumbs.length"
  >
    <div class="container">
      <div class="list-h">
        <Burger class="burger"></Burger>

        <AppLink class="link"
          :to="{name: 'home'}"
        >
          <HomeIcon></HomeIcon>
        </AppLink>
        <AppLink class="link"
          v-for="{to, text} in breadCrumbs" 
          :key="to.name" 
          :to="to"
        >{{ text }}</AppLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "~css/consts";


.burger {
  margin-right: 2rem;
}
.list-h {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.link {
  color: $color-gray-800;


  & + & {
    &:before {
      content: '>';
      padding-right: 1rem;
    }
  }


  &:last-child {
    color: $color-gray-600;
    
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}

</style>