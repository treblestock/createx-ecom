<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { BlogPost as BlogPostType } from '~/types'
import api from '~/api'
import BlogPost from '../features/BlogPost.vue'


const posts = ref<null | BlogPostType[]>(null)

onMounted(async () => {
  const data = await api.getBlogPosts(2)
  posts.value = data
})






</script>

<template>
  <div class="slider">
    <div class="header">
      <div class="title h1">Fashion blog</div>
      <AppLinkBtn outlined>
        View blog
      </AppLinkBtn>
    </div>

    <div class="posts">
      <BlogPost v-for="post, ind in posts" :key="+post.id + ind"
        :="post"
      ></BlogPost>
    </div>

  </div>
  
</template>

<style scoped>
@import '~css/consts';


.slider {

}
.slider-header {
  display: flex;
  justify-content: space-between;
}
.title {
}

.posts {

}

</style>
