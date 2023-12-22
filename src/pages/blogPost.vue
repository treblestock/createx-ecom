<script setup lang="ts">
import type { BlogPost } from '~/types'
import BlogPostBody from '~/components/widgets/BlogPostBody.vue'
import BlogPostCard from '~/components/widgets/BlogPostCard.vue'
import PrevNextPosts from '~/components/widgets/PrevNextPosts.vue'
import BlogPostComment from '~/components/widgets/BlogPostComment.vue'
import LeaveBlogPostCommentForm from '~/components/widgets/LeaveBlogPostCommentForm.vue'
import MailingSubscribtion from '~/components/widgets/MailingSubscribtion.vue'
import BlogPostHeader from '~/components/widgets/BlogPostHeader.vue'
import BlogPostFooter from '~/components/widgets/BlogPostFooter.vue'



const props = defineProps<{
  id: number
}>()

import useStoreBlogPosts from '~/stores/blogPosts'
const blogPostsStore = useStoreBlogPosts()

const post = computed<BlogPost | undefined>(() => blogPostsStore.findPost(props.id))


const { data: relatedPosts } = useFetch(() => api.getRelatedBlogPosts(props.id, 3), [] as BlogPost[])

const prevPost = computed<BlogPost | null>(() => {
  return post.value?.id && blogPostsStore.findPost(post.value.id - 1) || null
})
const nextPost = computed<BlogPost | null>(() => {
  return post.value?.id && blogPostsStore.findPost(post.value.id + 1) || null
})




// comments
// const comments = computed(() => {
//   if (!post.value) return []
//   const postComments = blogPostsStore.findBlogPostComments(post.value.id)
//   return postComments
// })
const comments = computed(() =>
  blogPostsStore.comments.filter(comment => comment.postId === post.value?.id)
)

</script>


<template>
  <div class="page"
    v-if="post"
  >
    <header class="blog-post-header">
      <div class="container-s">
        <BlogPostHeader class="blog-post-header-content"
          :key="post.id"
          :title="post.title"
          :commentsIds="post.commentsIds"
          :category="post.category"
          :date="post.date"
        ></BlogPostHeader>
      </div>
    </header>

    <div class="blog-post-body _with-border">
      <div class="container-s">
        <BlogPostBody class="blog-post-body-content"
          :key="post.id"
          :="post"
        ></BlogPostBody>
        <footer class="blog-post-footer">
          <BlogPostFooter class="blog-post-footer-content"
            :key="post.id"
            :tags="post.tags"
          ></BlogPostFooter>
        </footer>
      </div>
    </div>


    <div class="section-120 neighboring-posts _with-border">
      <div class="container-s">
        <PrevNextPosts
          :prevPost="prevPost"
          :nextPost="nextPost"
        ></PrevNextPosts>
      </div>
    </div>

    <div class="section-120 related-posts-section bgc-gray-200">
      <div class="container">
        <div class="related-posts-header">
          <div class="title h1">Related Posts</div>
          <AppLinkBtn class="blog-redirect btn_outlined-transparent"
            :to="{name: 'blog'}"
          >View all</AppLinkBtn>
        </div>

        <div class="related-posts grid">
          <BlogPostCard class="related-post"
            v-for="post in relatedPosts" :key="post.id" 
            :="post"
          ></BlogPostCard>
        </div>
      </div>
    </div>


    <div class="section-120 post-comments-section"
      v-if="comments.length"
      id="comments"
    >
      <div class="container-s">
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
      <div class="container-s">
        <LeaveBlogPostCommentForm class="leave-comment-form"
          :postId="post.id"
        ></LeaveBlogPostCommentForm>
      </div>
    </div>

    <section class="pv-100 bgc-gray-200" id="subscribe-mailing">
      <div class="container">
        <MailingSubscribtion></MailingSubscribtion>
      </div>
    </section>
    
  </div>
</template>

<style scoped>
@import '~css/consts';
.blog-post-header {
}

._with-border {
  border-top: 1px solid $color-gray-300;
}
.blog-post-footer {
}
.neighboring-posts {
  
}
.related-posts-section {
  padding: var(--leng-80) 0;
}

.related-posts-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;

  margin-bottom: var(--leng-60);
}

.related-posts {
  /* display: flex;
  gap: 3rem; */

  gap: 3rem;
  --min-width: 40rem;
}
.related-post {
  height: 100%;
}


/* comments */
.post-comments-section {
}
.post-comments-title {
  margin-bottom: 4rem;
  text-align: center;
}
.comments {
  display: flex;
  flex-direction: column;
  gap: var(--leng-40);
}
.blog-post-comment {
  max-width: 81rem;
  padding: 0;
  

}

</style>