<script setup lang="ts">
import { dateToHumanCase } from '~/utils'
import IconChat from '~/assets/img/icons/decor/Chat.svg'
import Socials from '~/components/features/Socials.vue'



const props = defineProps<{
  id: number
}>()

import useStoreBlogPosts from '~/stores/blogPosts'
import { BlogPost } from '~/types';
import type { VNode } from 'vue';
const blogPostsStore = useStoreBlogPosts()


const post = computed(() => blogPostsStore.findPost(props.id))


export interface BlogPostDataTypes {
  ul: string[]
  text: string
  quote: string 
  bold: string
  img: string
}


type CustomVnode = keyof BlogPostDataTypes
type VnodesPayloads = BlogPostDataTypes[CustomVnode]

const NodeTypes = {
  ul: (payload: string[]) => h(`ul`, {
    class: `ul`
  }, payload.map(liText => h(`li`, liText)) ),
  text: (payload: string) => h(`div`, {class: `text`}, payload),
  bold: (payload: string) => h(`div`, {class: `text-bold`}, payload),
  quote: (payload: string) => h(`div`, {class: `quote`}, payload),
  img: (payload: string) => h(`div`, {class: `img`}, h(`img`, {
    src: payload
  })),
}



const Content = computed<VNode[]>(() => {
  if (post.value?.content == undefined) return h(`div`, {
    class: `content`,
  }, [])

  const content: BlogPost[`content`] = post.value.content
  const vnodes: VNode[] = content.map(contentRecord => {
    const [nodeType, nodePayload] = Object.entries(contentRecord)[0] as [CustomVnode, VnodesPayloads]

    // @ts-ignore
    return NodeTypes[nodeType](nodePayload)
  })
  return h(`div`, {
    class: `content`
  }, vnodes)
})


</script>

<template>
  <div class="page"
    v-if="post"
  >
    <div class="section header">
      <div class="container">
        <div class="title h1">{{ post.title }}</div>
        <div class="header-row">
          <div class="labels">
            <div class="test_s">{{ post.category.join(`, `) }}</div>
            <div class="test_s">{{ dateToHumanCase(post.date, 'long') }}</div>
            <div class="test_s with-icon">
              <IconChat></IconChat>
              {{ post.commentsIds.length }} comment(-s)
            </div>
          </div>

          <Socials class="social-share"></Socials>
        </div>
      </div>

    </div>

    <div class="section post-body">
      <div class="container">
        <div class="img"><Img :src="post.img" alt="" /></div>
        <Content></Content>
      </div>
    </div>

    <div class="container post-footer">
      <!-- <div class="container"> -->
        <div class="footer-tags">
          <b>Tags: </b>
          <AppLink class="footer-tag-link tag"
            v-for="tag in post.tags" :key="tag"
            :to="{name: `blog`}"
          >{{ tag }}</AppLink>
        </div>
        <Socials class="footer-socials social-share"></Socials>
      <!-- </div> -->
    </div>
  </div>
</template>

<style scoped>
@import '~css/consts';
@import '~css/utils';

.page {
  
  
}
.section {
  padding: 3.2rem 0;
  & + & {
    border-top: 1px solid $color-gray-300;
  }
}
.container {
  max-width: 85rem; /* 81 + 2 + 2 */
}
.title {
  margin-bottom: 3.2rem;
}
.header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
}
.labels {
}
.test {

  &_s {
  }
}
.with-icon {
}
.social-share {
}

.labels {
  margin-bottom: .8rem;

  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;


  color: $color-gray-700;

  @mixin slashBetween 80%, $color-text, 1.2rem; 
}
.with-icon {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}


/* content */
.post-body .container {
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
}

.text {
  margin: 1.6rem 0;
  color: $color-gray-800;
}
.text-bold {
  margin: 1.6rem 0;
  font-weight: 700;
  color: $color-gray-900;
}
.quote {
  display: flex;
  align-items: start;
  gap: 3.2rem;

  margin: 4rem 0;

  color: $color-gray-900;
  font-weight: 700;
  &:before {
    content: url("~/assets/img/icons/decor/quotes.png");

    color: $color-green;
  }
}
.img {
  margin: 3.2rem 0;

  height: 36rem;
  width: 100%;
  position: relative;

  
  
  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.ul {
  color: $color-gray-800;
  margin: 3.2rem 0;
}

/* footer */
.post-footer {
  padding-bottom: 6rem;
  border: none;
}
.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
}
.footer-tags {
  
  display: flex;
  gap: 2rem;
  
  color: $color-gray-900;
  
}
.footer-tag-link {
  
}
</style>