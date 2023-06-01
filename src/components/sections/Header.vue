<script setup lang="ts">
// <!-- todo: implement header.hover -> header.expanded()
import { ref } from 'vue'
import { clothes, shoes, accessories } from '~/public/data/different.json'

import Favourite from '~/components/icons/Favourite.vue'
import Cart from '~/components/icons/Cart.vue'
import HeaderAdv from '~/components/features/HeaderAdv.vue'
import Logo from '~/components/features/Logo.vue'


import useStoreAuth from '~/stores/Auth'
const AuthStore = useStoreAuth()

const isAuth = computed(() => AuthStore.isAuth)
const signin = () => AuthStore.signin()
const signout = () => AuthStore.signout()




const isExpanded = ref(false)

</script>

<template>
  <header class="header">
    <div class="header-top">
      <div class="container">
        <div class="phone">Available 24/7 at <a href="tel:4055550128" class="link">(405) 555-0128</a></div>
        <nav class="header-top-nav">
          <AppLink>Track order</AppLink>
          <AppLink>Blog</AppLink>
          <AppLink>Contacts</AppLink>
        </nav>

        <div class="auth">
          <!-- <Icon icon="Profile"></Icon>
          <span>Log in / Register</span> -->
          <Btn v-if="!isAuth" @click="signin">sing in</Btn>
          <Btn v-else @click="signout">sing out</Btn>
        </div>
      </div>
    </div>
    <div class="header-middle">
      <div class="container">
        <Logo></Logo>
        <nav class="major-category-nav">
          <AppLink>Men</AppLink>
          <AppLink>Women</AppLink>
          <AppLink>Kids</AppLink>
          <AppLink class="_red">Sale</AppLink>
        </nav>
        <div class="toolbar">
          <Input class="search-product"></Input>
          <Favourite class="favourite"></Favourite>
          <Cart class="cart"></Cart>
        </div>
      </div>
    </div>
    <div class="sale-adv">
      <div class="container">
        <AppLink>
          <Icon icon="LeftChevron"></Icon>
          <span class="bold">Up to 70% Off. &#x2800;</span><span class="_underlined">Shop our latest sale styles</span>
          <Icon icon="RightChevron"></Icon>
        </AppLink>
      </div>
    </div>
    <div class="expanded"
      :class="!isExpanded ? '_hidden-smart' : ''"
    >
      <div class="container">
        <nav class="minor-category-nav">
          <div class="nav-category-group">
            <AppLink>New collection</AppLink>
            <AppLink>Best Sellers</AppLink>
            <AppLink>Plus Size</AppLink>
            <AppLink>Sale up to 70%</AppLink>
          </div>
          <div class="nav-category-group">
            <AppLink v-for="category in clothes" :key="category">{{ category }}</AppLink>
          </div>
          <div class="nav-category-group">
            <AppLink v-for="category in shoes" :key="category">{{ category }}</AppLink>
          </div>
          <div class="nav-category-group">
            <AppLink v-for="category in accessories" :key="category">{{ category }}</AppLink>
          </div>
        </nav>
        <div class="product-adv">
          <HeaderAdv></HeaderAdv>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
@import '~css/consts';
@import '~css/utils';

.bold {
  font-weight: 700;
}

.header {
  width: 100%;
  position: relative;
}

/* top section */
.header-top {
  padding: 1rem 0;

  background: $color-gray-900;
  color: $color-white-op;


  & .container {
    /* structure */
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }

  & .link {
    color: $color-white-op;

    font-weight: 700;

    &:hover {
      color: $color-green-dark;
    }
  }
}

.phone {
}
.header-top-nav {
  /* structure */
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3.2rem;
}
.auth {
  & .btn {
    padding: 0.2rem 3.2rem;
  }
}

/* middle section */
.header-middle {
  padding: 2rem 0;
  background: $color-white; /* solid bgc to cover content */
  & .container {
    /* structure */
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }

  & .link {
    color: $color-gray-800;
    font-weight: 700;

    &._red {
      color: $color-red;
    }

    &:hover {
      color: $color-green;
    }
  }
}


.major-category-nav {
    /* structure */
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
}

.toolbar {
  /* structure */
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
}
.search-product {
}
.favourite {
}
.cart {
}


/* bottom section */
.sale-adv {
  /* pos */
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;

  padding: 0.7rem 0;

  /* structure */
  display: flex;
  align-items: center;
  justify-content: center;


  /* view */
  background: $color-green;
  & .link {
    color: $color-white;
    display: flex;
    align-items: center;

    &:hover {
      text-decoration: underline;
      font-weight: 700;
    }
  }
}

.chevron {
  font-size: 5rem;
}


/* expanded */
.expanded {
  /* pos */
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;

  padding: 2rem 0 4rem;

  /* decor */
  @mixin slashBetween 7rem;

  & .container {
    /* structure */
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }
}
.minor-category-nav {
  flex: 1 1 auto;

  /* structure */
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;

}
.nav-category-group {
  flex: 0 0 25%;
  text-align: left;
}
.nav-category-group-lable {
  font-size: 1.4rem;
  background: $color-gray-900;
}
.product-adv {
  flex: 0 0 auto;
}


</style>