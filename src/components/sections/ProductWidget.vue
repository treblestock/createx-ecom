<script setup lang="ts">
import ProductGeneralInfoTab from '~/components/features/ProductGeneralInfoTab.vue'
import ProductProductDetailsTab from '~/components/features/ProductProductDetailsTab.vue'
import ProductReviewsTab from '~/components/features/ProductReviewsTab.vue'


const tabs = {
  "General info": ProductGeneralInfoTab,
  "Product details": ProductProductDetailsTab,
  "Reviews": ProductReviewsTab,
}

const currentTab = ref<keyof typeof tabs>("General info")
const currentTabComponent = computed<Component>(() => tabs[currentTab.value] )






</script>

<template>
  <section class="section">
    <div class="container">
      <div class="header">
        <div class="name-and-art">
          <div class="h1">Basic hooded sweatshirt in pink</div>
          <div class="art">Art. No. 183260098</div>
        </div>

        <div class="tabs">
          <RadioBtn class="tab"
            v-for="_, tabName in tabs" :key="tabName"
            name="currentTab"
            v-model="currentTab"
            :value="tabName"
          >
            {{ tabName }}
          </RadioBtn>
        </div>
      </div>

      <div class="body">
        <component :is="currentTabComponent"></component>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import '~css/consts';


</style>