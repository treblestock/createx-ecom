<script setup lang="ts">
import api from '~/api'
import BlogPost from '../features/BlogPost.vue'


const posts = useFetchItems(() => api.getBlogPosts(2))








</script>

<template>
  <section class="section">
    <div class="container">
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

        <div class="posts">
          <BlogPost 
            v-for="post in posts" :key="post.id"
            :="post"
          ></BlogPost>
        </div>
      </div>
    </div>
  </section>
  
</template>

<style scoped>
@import '~css/consts';

.section {
  margin-bottom: 12rem;
}
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
  display: flex;
  gap: 3rem;
}

</style>
