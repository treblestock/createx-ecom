<script setup lang="ts">
import type { BlogPost } from '~/types'
import SignInPrompt from '~/components/features/SignInPrompt.vue'

const props = defineProps<{
  postId: BlogPost['id']
}>()

import useStoreAuth from '~/stores/auth'
const authStore = useStoreAuth()

import useStoreBlogPosts from '~/stores/blogPosts'
const blogPostsStore = useStoreBlogPosts()

const isAuth = computed(() => authStore.isAuth)

const commentForm = ref({
  comment: ``,
})

async function onSubmit() {
  if (!commentForm.value.comment) return

  await blogPostsStore.leaveBlogPostComment({
    comment: commentForm.value.comment,
    date: new Date(),
    postId: props.postId,
  })

  commentForm.value.comment = ''
}


</script>

<template>
  <section class="comment">
    <div class="h1 title">Leave your comment</div>
    <SignInPrompt class="sign-in-prompt"
    v-if="!isAuth"></SignInPrompt>

    <form class="comment-form"
      @submit.prevent="onSubmit"
      :class="{_disabled: !isAuth}"
    >
      <TextareaGroup class="input-group"
        v-model="commentForm.comment"
        :disabled="!isAuth"
      >Your Comment*</TextareaGroup>
      
      <div class="submit">
        <Btn class="submit-btn"
          type="submit"
        >Post Comment</Btn>
      </div>
    </form>
  </section>
</template>

<style scoped>
@import "~css/consts";


.title {
  margin-bottom: 4rem;

  text-align: center;
}

.sign-in-prompt {
  margin-bottom: 4rem;
}
.comment-form {
  display: flex;
  flex-wrap: wrap;
  row-gap: 2.4rem;
  column-gap: 3rem;

  
}
.input-group {
  flex: 1 0 clamp(23rem, 100% / 2 - 1.5rem , 39rem);
}
.submit {
  flex: 0 0 100%;
  text-align: center;

  margin-top: 2.5rem;
}




</style>