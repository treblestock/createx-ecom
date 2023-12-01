<script setup lang="ts">
import BlogPostCardLarge from '~/components/widgets/BlogPostCardLarge.vue'
import BlogSidebar from '~/components/widgets/BlogSidebar.vue'

import useStoreBlogPosts from '~/stores/blogPosts'
const blogPostsStore = useStoreBlogPosts()


const blogPosts = computed(() => blogPostsStore.blogPosts)








</script>

<template>
  <div class="page">
    <div class="container">
      <div class="posts">
        <div class="title h1">Blog Posts</div>
        <BlogPostCardLarge class="blog-post-card"
          v-for="blogPost in blogPosts" :key="blogPost.id" 
          :="blogPost"
        ></BlogPostCardLarge>
      </div>

      <BlogSidebar class="sidebar"></BlogSidebar>
    </div>
  </div>
</template>

<style scoped>
@import '~css/consts';

.page .container {
  display: flex;
  gap: 8rem;

  padding-top: 3.2rem;
  padding-bottom: 3.2rem;
}
.title {
  margin-bottom: 3.2rem;
}
.posts {
  flex: 1 1 auto;
}
.blog-post-card {
  margin-bottom: 6rem;
}
.sidebar {
  flex: 0 0 35rem;
}

</style>