<script setup lang="ts">
import BlogPost from '~/components/widgets/BlogPost.vue'
import BlogPostCard from '~/components/widgets/BlogPostCard.vue'
import PrevNextPosts from '~/components/widgets/PrevNextPosts.vue'
import BlogPostComment from '~/components/widgets/BlogPostComment.vue'
import LeaveBlogPostCommentForm from '~/components/widgets/LeaveBlogPostCommentForm.vue'
import MailingSubscribtion from '~/components/widgets/MailingSubscribtion.vue'




const props = defineProps<{
  id: number
}>()

import useStoreBlogPosts from '~/stores/blogPosts'
import type { BlogPost as BlogPostType } from '~/types'
const blogPostsStore = useStoreBlogPosts()

const post = computed(() => blogPostsStore.findPost(props.id))
const relatedPosts = computed(() => blogPostsStore.blogPosts.slice(3, 5))
const prevPost = computed<BlogPostType | null>(() => {
  return post.value?.id && blogPostsStore.findPost(post.value.id - 1) || null
})
const nextPost = computed<BlogPostType | null>(() => {
  return post.value?.id && blogPostsStore.findPost(post.value.id + 1) || null
})


// comments
const comments = computed(() => {
  if (!post.value) return []
  const postComments = blogPostsStore.findBlogPostComments(post.value.id)
  return postComments
})



</script>


<template>
  <div class="page">
    <BlogPost :id="id"></BlogPost>


    <div class="section blog-post-footer">
      <div class="container container-small">
        <PrevNextPosts
          :prevPost="prevPost"
          :nextPost="nextPost"
        ></PrevNextPosts>
      </div>
    </div>

    <div class="section related-posts _bgc-gray">
      <div class="container">
        <div class="related-posts-header">
          <div class="title h1">Related Posts</div>
          <AppLinkBtn class="blog-redirect btn_outlined-transparent"
            :to="{name: 'blog'}"
          >View all</AppLinkBtn>
        </div>

        <div class="related-posts-posts">
          <BlogPostCard v-for="post in relatedPosts" :key="post.id" 
          :="post"></BlogPostCard>
        </div>
      </div>
    </div>


    <div class="section post-comments-section"
      v-if="comments.length"
    >
      <div class="container container-small">
        <div class="post-comments">
          <div class="post-comments-title h1">
            {{ comments.length }} Comments
          </div>
          <div class="comments">
            <BlogPostComment class="blog-post-comment"
            v-for="comment in comments" :key="comment.id" 
            :="comment"></BlogPostComment>
          </div>
        </div>
      </div>
    </div>

    <div class="leave-comments-section section">
      <div class="container container-small">
        <LeaveBlogPostCommentForm class="leave-comment-form"></LeaveBlogPostCommentForm>
      </div>
    </div>

    <MailingSubscribtion></MailingSubscribtion>
    
  </div>
</template>

<style scoped>
@import '~css/consts';

.section {
  padding: 8rem 0;
  
  border-top: 1px solid $color-gray-300;
}
.container-small {
  max-width: 85rem; /* 81 + 2 + 2 */
}
.blog-post-footer {
  padding: 3.2rem 0;
  padding-bottom: 10rem;
}
.related-posts.section {
  padding: 8rem 0;
}

.related-posts-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;

  margin-bottom: 6rem;
}

.related-posts-posts {
  display: flex;
  gap: 3rem;
}


/* comments */
.post-comments-section {

  & .container {
    max-width: 85rem; /* 81 + 2 + 2 */

  }
}
.post-comments-title {
  margin-bottom: 4rem;
  text-align: center;
}
.comments {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
.blog-post-comment {
  max-width: 81rem;
  padding: 0;
  

}

</style>