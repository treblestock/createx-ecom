<script setup lang="ts">
import BlogPostCard from '~/components/widgets/BlogPostCard.vue'


// const posts = useFetchItems(() => api.getBlogPosts(2))


import useStoreBlogPosts from '~/stores/blogPosts'
const blogPostsStore = useStoreBlogPosts()
const posts = computed(() => blogPostsStore.getBlogPosts(2))



</script>

<template>
  <div class="wrapper">
    <div class="blog-preview">
      <div class="header">
        <div class="title h1">Fashion blog</div>
        <AppLinkBtn class="link"
          outlined
          :to="{
            name: 'blog'
          }"
        >
          View blog
        </AppLinkBtn>
      </div>

      <div class="posts grid">
        <BlogPostCard class="post"
          v-for="post in posts" :key="post.id"
          :="post"
        ></BlogPostCard>
      </div>
    </div>
  </div>
  
</template>

<style scoped>
@import '~css/consts';

.blog-preview {

}
.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  margin-bottom: 6rem;
}
.title {
  color: $color-gray-900;
}
.link {
  
}

.posts {
  gap: 3rem;
  --min-width: 39rem;
}


</style>