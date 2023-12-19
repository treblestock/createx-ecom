<script setup lang="ts">
import type { BlogPost, BlogPostContent} from '~/types';
import type { VNode } from 'vue';



const props = defineProps<{
  img: string
  description: string
  content: BlogPostContent
}>()


export interface BlogPostDataTypes {
  ul: string[]
  text: string
  quote: string 
  bold: string
  img: string
}


type CustomVnode = keyof BlogPostDataTypes
type VnodesPayloads = BlogPostDataTypes[CustomVnode]

const NodeTypes: Record<CustomVnode, (...args: any) => VNode> = {
  ul: (payload: string[]) => h(`ul`, {
    class: `ul`
  }, payload.map(liText => h(`li`, {class: 'li'}, liText)) ),
  text: (payload: string) => h(`div`, {class: `text`}, payload),
  bold: (payload: string) => h(`div`, {class: `text-bold`}, payload),
  quote: (payload: string) => h(`div`, {class: `quote`}, payload),
  img: (payload: string) => h(`div`, {class: `img`}, h(`img`, {
    src: payload
  })),
}



const Content = computed<VNode>(() => {
  if (props.content == undefined) return h(`div`, {
    class: `content`,
  }, [])

  const content: BlogPost[`content`] = props.content
  const vnodes: VNode[] = content.map(contentRecord => {
    const [nodeType, nodePayload] = Object.entries(contentRecord)[0] as [CustomVnode, VnodesPayloads]

    return NodeTypes[nodeType](nodePayload)
  })
  return h(`div`, {
    class: `content`
  }, vnodes)
})



const BASE_URL = import.meta.env.BASE_URL
</script>

<template>
  <div class="post-body">
    <div class="img-a">
      <img :src="BASE_URL + img" alt="" >
    </div>
    <div class="text-xl-b">{{ description }}</div>
    <Content></Content>
  </div>
</template>

<style scoped>
@import '~css/consts';
@import '~css/utils';


.post-body {
  padding: 3.2rem 0;
  border-top: 1px solid $color-gray-300;

  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
}
.img-a {
  margin: 3.2rem 0;

  height: 36rem;
  width: 100%;
}

.text-xl-b {
  color: $color-gray-900;
}

/* dynamic tags */
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

.ul {
  color: $color-gray-800;
  margin: 3.2rem 0;
}
.li {
  &:before {
    content: url("~/assets/img/icons/decor/check.svg");
    
  }
}
</style>