<script setup lang="ts">
import type { BlogPostTag } from '~/types'
import Socials from '~/components/features/Socials.vue'



const props = defineProps<{
  tags: BlogPostTag[]
}>()



</script>

<template>
  <div class="post-footer">
    <div class="footer-tags">
      <b>Tags: </b>
      <AppLink class="footer-tag-link tag"
        v-for="tag in tags" :key="tag"
        :to="{name: `blog`}"
      >{{ tag }}</AppLink>
    </div>

    <Socials class="footer-socials social-share"></Socials>
  </div>

</template>

<style scoped>
@import '~css/consts';
@import '~css/utils';

/* footer */
.post-footer {
  padding-bottom: var(--leng-40);
  border: none;
}
.post-footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
}
.footer-tags {
  flex: 1 1 40rem;

  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  
  color: $color-gray-900;
  
}
.footer-tag-link {
  
}
</style>