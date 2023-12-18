<script setup lang="ts">
import MobileSidebar from '~/components/features/MobileSidebar.vue'
import Pagination from '~/components/features/Pagination.vue'
import BlogPostCardLarge from '~/components/widgets/BlogPostCardLarge.vue'
import BlogSidebar from '~/components/widgets/BlogSidebar.vue'

import useStoreBlogPosts from '~/stores/blogPosts'
const blogPostsStore = useStoreBlogPosts()


const blogPosts = computed(() => blogPostsStore.blogPosts)

// mobile sidebar
const { vw } = useViewPort()

const VW_MOBILE_SIDEBAR_APPEARS = 767
const isSidebarMobile = computed(() => vw.value <= VW_MOBILE_SIDEBAR_APPEARS)

const isSidebarOpen = ref(false)


// pagination
const limit = ref(5)
const currentPage = ref(1) 
const {
  pages,
  currentInds,
} = usePagination({
  limit,
  currentPage,
  items: blogPosts
})

</script>

<template>
  <div class="page">
    <div class="container">
      <BlogSidebar class="sidebar"
        v-if="!isSidebarMobile"
      ></BlogSidebar>

      <MobileSidebar v-else
        :isShown="isSidebarOpen"
        @open="isSidebarOpen = true"
        @close="isSidebarOpen = false"
        @toggle="isSidebarOpen = !isSidebarOpen"
      >
        <BlogSidebar class="mobile-sidebar"></BlogSidebar>
      </MobileSidebar>

      <div class="posts">
        <div class="row">
          <div class="title h1">Fashion blog</div>
          <Pagination class="pagination"
            v-model="currentPage"
            :pages="pages"
          ></Pagination>
        </div>
        <BlogPostCardLarge class="blog-post-card"
          v-for="ind in currentInds" :key="blogPosts[ind].id" 
          :="blogPosts[ind]"
        ></BlogPostCardLarge>

        <Pagination class="pagination"
          v-model="currentPage"
          :pages="pages"
        ></Pagination>
      </div>

    </div>
  </div>
</template>

<style scoped>
@import '~css/consts';

.page .container {
  display: flex;
  flex-direction: row-reverse;
  gap: var(--leng-80);

  padding-top: 3.2rem;
  padding-bottom: 3.2rem;
}
.title {
}
.posts {
  flex: 1 1 60rem;
}
.blog-post-card {
  margin-bottom: 6rem;
}
.sidebar {
  flex: 0 1 35rem;
}
.mobile-sidebar {
  padding: 2rem;
  width: 80vw;
  max-width: 39rem;
}

.row {
  margin-bottom: 3.2rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: start;
}

</style>