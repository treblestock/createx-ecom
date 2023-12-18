<script setup lang="ts">
import Tag from '~/components/features/Tag.vue'
import BlogPostCardSmall from '~/components/widgets/BlogPostCardSmall.vue'
import SearchBlogPost from '~/components/features/SearchBlogPost.vue'


import useStoreBlogPosts from '~/stores/blogPosts'
const blogPostsStore = useStoreBlogPosts()

const tags = computed(() => blogPostsStore.tags)
const selectedTags = ref<Set<string>>(new Set())

const categories = computed(() => blogPostsStore.categories)
const selectedCategories = ref<Set<string>>(new Set())


const featuredPosts = computed(() => blogPostsStore.blogPosts.slice(0, 3) )
</script>

<template>
  <div class="sidebar">
    <div class="search-blog sidebar-row">
      <SearchBlogPost class="search-input"></SearchBlogPost>
    </div>

    <div class="blog-categories sidebar-row">
      <div class="title h4">Blog Categories</div>
      <label class="blog-category"
        v-for="category in categories" :key="category"
      >
        <input class="category-checkbox _hidden-smart"
          type="checkbox"
          v-model="selectedCategories"
          :value="category"
        >
        <div class="category-name text-b">{{ category }}</div>
        <div class="category-count">23</div>
      </label>
    </div>

    <div class=" sidebar-row">
      <div class="title h4">Featured posts</div>
      <div class="featured-posts">
        <BlogPostCardSmall class="featured-post"
          v-for="post in featuredPosts" :key="post.id" 
          :="post"
        ></BlogPostCardSmall>
      </div>
    </div>

    <div class="sidebar-row">
      <div class="title h4">tags</div>
      <div class="sidebar-tags">
        <Tag class="sidebar-tag"
          v-for="tag in tags" :key="tag"
          v-model="selectedTags"
          :value="tag"
          type="checkbox"
          name="selectedTages"
        ></Tag>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '~css/consts';

.sidebar {
  color: $color-gray-900;

}
.sidebar-row {
  padding: 3.2rem 0;
  & + & {
    border-top: 1px solid $color-gray-300;
  }

  &:first-child {
    padding-top: 0;
  }
}
.search-blog {
  width: 100%;
}
.search-input {
  width: 100%;
}
.blog-categories {
}
.title {
  margin-bottom: 2.4rem;

  color: $color-gray-900;
}
.blog-category {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1rem;

  color: $color-gray-800;
}
.category-checkbox {

  &:hover,
  &:checked ~ .category-name,
  &:checked ~ .category-count {
    color: $color-green;
  }
}
.category-name {
  color: $color-gray-800;
  font-weight: 700;
}
.category-count {
}
.featured-posts {
}
.featured-post {
  & + & {
    margin-top: 2.4rem;
  }
}
.sidebar-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
}
.tag {
}

</style>