<script setup lang="ts">
const searchStr = ref('')

const {data: blogPosts} = useFetch(api.getBlogPosts, [])

const foundBlogPosts = computed(() => {
  if (searchStr.value === '') return []
  return blogPosts.value.filter(blogPost => doesIncludeWords(blogPost.title, searchStr.value))
})


// ui
const searchInput = ref<ComponentPublicInstance>()
function clearInput() {
  setTimeout(() => searchStr.value = '', 200)
}

onMounted(() => searchInput.value?.$el.addEventListener('blur', clearInput))
onBeforeUnmount(() => searchInput.value?.$el.removeEventListener('blur', clearInput))

</script>

<template>
  <div class="search-blog-posts">
    <Input class="search-input"
      ref="searchInput"
      placeholder="Search for blog post..."
      v-model="searchStr"
    ></Input>
    <div class="popover"
      v-if="foundBlogPosts.length"
    >
      <AppLink class="search-record link-idle"
        v-for="blogPost in foundBlogPosts" :key="blogPost.id"
        :to="{name: 'blogPost', params: {id: blogPost.id}}"
      >{{ blogPost.title }}</AppLink>
    </div>
  </div>
</template>

<style scoped>
@import "~css/consts";
@import "~css/lib/customWebkitScrollbar";
.search-blog-posts {
  z-index: 101;
  position: relative;
  overflow: visible;
}
.search-input {
  display: block;
  width: 100%;
}
.popover {

  z-index: 101;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;

  max-height: 20rem;
  overflow: auto;
  @mixin custom-scrollbar;

  background: $color-white;
  color: $color-gray-700;
  font-weight: 700;
}
.search-record {
  display: block;

  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid $color-gray-300;
}


</style>