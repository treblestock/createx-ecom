<script setup lang="ts">
import { BlogPost } from '~/types';
import BlogPostCardSmall from '~/components/widgets/BlogPostCardSmall.vue'
import IconArrow from '~/components/icons/Arrow.vue'



const props = defineProps<{
  prevPost: BlogPost | null
  nextPost: BlogPost | null
}>()

</script>

<template>
  <div class="posts">
    <div class="post-prev"
      v-if="prevPost"
    >
      <AppLink class="link _with-icon"
      :to="{name: `blogPost`, params: {id: prevPost.id}}">
        <IconArrow class="arrow-left arrow"
          direction="left"
        ></IconArrow>
        Prev Post
      </AppLink>
      <BlogPostCardSmall class="blog-post"
        :=prevPost
      ></BlogPostCardSmall>
    </div>
    
    <div class="post-next"
      v-if="nextPost"
    >
      <AppLink class="link _with-icon"
      :to="{name: `blogPost`, params: {id: nextPost.id}}">
        <IconArrow class="arrow-right arrow"
          direction="right"
        ></IconArrow>
        Next Post
      </AppLink>
      <BlogPostCardSmall class="blog-post"
        :=nextPost
      ></BlogPostCardSmall>
    </div>
    
  </div>
</template>

<style scoped>
@import '~css/consts';


.link {

  color: $color-gray-800;
  &:hover {
    color: $color-green;
  }
}
.posts {
  display: flex;
  justify-content: space-between;
  align-items: start;

  gap: 4px;



  & > * {
    flex: 0 0 34rem;
  }
}
.post-prev {
  color: $color-gray-800;
  font-weight: 700;

  text-align: left;

  & .link {
    justify-content: start;
  }
}
.post-next {
  font-weight: 700;
  color: $color-gray-800;

  & .link {
    flex-direction: row-reverse;
    justify-content: end;
  }
}
.row {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.arrow {
  /* display: inline; */
}
.arrow-left {}

.post-next .blog-post {
  flex-direction: row-reverse;
  text-align: right;
}



</style>