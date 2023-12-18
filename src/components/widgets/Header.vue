<script setup lang="ts">
// <!-- todo: implement header.select(Category) -> header.expanded()

import Favourite from '~/components/icons/Favourite.vue'
import Cart from '~/components/icons/Cart.vue'
// import HeaderAdv from '~/components/features/HeaderAdv.vue'
import Logo from '~/components/features/Logo.vue'
import HeaderAuth from '~/components/features/HeaderAuth.vue'
import SearchProduct from '~/components/features/SearchProduct.vue'


import BreadCrumbs from '~/components/widgets/BreadCrumbs.vue'


const headerTopHtml = ref<HTMLElement | null>(null)
const headerHeight = useHeaderHeight()

function calcHeaderHeight() {
  const headerTopHeight = headerTopHtml.value?.offsetHeight || 0
  headerHeight.value = headerTopHeight
}


function setCssVarHeaderHeight() {
  document.documentElement.style.setProperty(`--header-height`, `${headerHeight.value}px`)
}

watch(
  headerHeight,
  setCssVarHeaderHeight,
)

window.addEventListener('resize', useDebounce(calcHeaderHeight, 100))

onMounted(calcHeaderHeight)
onUpdated(calcHeaderHeight)



</script>

<template>
  <header class="header"
    ref="headerTopHtml"
  >
    <div class="header-top">
      <div class="container">
        <div class="phone">Available 24/7 at <a href="tel:4055550128" class="link">(405) 555-0128</a></div>
        <nav class="header-top-nav">
          <ul class="header-top-nav-list">
            <li><AppLink :to="{name: 'trackOrder'}">Track order</AppLink></li>
            <li><AppLink :to="{name: 'blog'}">Blog</AppLink></li>
            <li><AppLink :to="{name: 'contacts'}">Contacts</AppLink></li>
          </ul>
        </nav>
        <HeaderAuth class="header-top-auth"></HeaderAuth>
      </div>
    </div>
    

    <div class="header-middle">
      <div class="container">
        <Logo class="header-logo"></Logo>

        <nav class="major-category-nav mobile-slider">
          <ul class="major-category-nav">
            <li><AppLink :to="{name: 'products', query: {categorySex: 'men'}}">Men</AppLink></li>
            <li><AppLink :to="{name: 'products', query: {categorySex: 'women'}}">Women</AppLink></li>
            <li><AppLink :to="{name: 'products', query: {categorySex: 'kids'}}">Kids</AppLink></li>
            <li><AppLink class="_red" :to="{name: 'products', query: {sale: 'y'}}">sale</AppLink></li>
          </ul>
        </nav>


        <SearchProduct class="search-product"
          placeholder="Search for products..."
        ></SearchProduct>
        <div class="toolbar-icons">
          <Favourite class="favourite"></Favourite>
          <Cart class="cart"></Cart>
        </div>
      </div>

    </div>

    <div class="sale-adv">
      <div class="container">
        <AppLink
          :to="{name: 'products', query: {sale: 'y'}}"
        >
          <Icon icon="LeftChevron"></Icon>
          <span class="bold">Up to 70% Off. &#x2800;</span><span class="_underlined">Shop our latest sale styles</span>
          <Icon icon="RightChevron"></Icon>
        </AppLink>
      </div>
    </div>

    <BreadCrumbs class="breadcrumbs-section"
      @vue:updated="calcHeaderHeight"
      @vue:unmount="calcHeaderHeight"
    ></BreadCrumbs>
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
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    column-gap: 2rem;
    row-gap: 1rem;



    @media (width <= 600px) {
      & .phone {
        display: none;
        order: 1;
      }
      & .header-top-nav {
        order: 1;
      }
      & .header-top-auth {
        order: 2;
      }
    }
  }

  & .link {
    color: $color-white-op;

    font-weight: 700;

    &:hover {
      color: $color-white;
    }
  }
}

.phone {
}
.burger {
  display: none;
  @media (width < 400px) {
    display: flex;
  }
}
.header-top-nav {

}
.header-top-nav-list {
  /* structure */
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3.2rem;
  @media (width <= 600px) {
    gap: 1rem;
  }
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
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    column-gap: 2rem;
    row-gap: 1rem;
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

  @media (width < 510px) {
    padding: 1rem 0;
  }
    @media (width < 350px) {
    box-shadow: 0 0 5px 1px $color-gray-700;
  }
}
.header-logo {
  flex: 0 0 130px;
  @media (width < 400px) {
    display: none;
  }
}

.major-category-nav {
    /* structure */
  max-width: 26rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--leng-40);
  @media (width < 600px) {
    gap: 2rem;
  }
}

/* .toolbar {
  flex: 1 1 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--leng-40); 
} */
.toolbar-icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--leng-40);
  @media (width < 600px) {
    gap: .7rem;
  }

}
.search-product {

  width: 38rem;
  box-shadow: inset 0 0 0 1px $color-gray-400;

  &::placeholder {
    color: $color-gray-600;
  }

  @media (width < 1000px) {
    width: auto;
  }
}
.favourite {
}
.cart {
}


/* bottom section */
.sale-adv {

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

  @media (width < 350px) {
    display: none;
  }
}

.chevron {
  font-size: 5rem;
}

/* breadcrumbs */
.breadcrumbs-section {
  padding: var(--leng-16) 0;
  background: $color-gray-200;

  /* @media (width < 400px) {
    display: none;
  } */
  
  /* @media (width < 600px) {
    display: none;
    padding: 1rem 0;
  } */
}
.container {
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