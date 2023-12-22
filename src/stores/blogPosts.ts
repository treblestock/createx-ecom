import { defineStore } from "pinia"
import type { BlogPost, BlogPostComment } from '~/types'
import {
  tags as allTags,
  blogPostsCategories,
} from '~/assets/data/different.json'


import useStoreAuth from '~/stores/auth'


export default defineStore('blogPosts', () => {
  // posts
  // const blogPosts = ref<BlogPost[]>(blogPostsMock as BlogPost[])

  const {data: blogPosts} = useFetch(api.getBlogPosts, [] as BlogPost[])
  function findPost(id: number): BlogPost | undefined {
    return blogPosts.value.find(post => post.id === id)
  }
  function getBlogPosts(count?: number): BlogPost[] {
    return count ? blogPosts.value.slice(0, count) : blogPosts.value
  }
  function findPosts(ids: number[]): BlogPost[] {
    return blogPosts.value.filter(post => ids.includes(post.id))
  }


  // comments
  // const comments = ref<BlogPostComment[]>(commentsMock as BlogPostComment[])
  const {data: comments} = useFetch(api.getBlogPostComments, [] as BlogPostComment[])

  function findComment(id: number): BlogPostComment | undefined {
    return comments.value.find(comment => comment.id === id)
  }
  function findComments(ids: number[]): BlogPostComment[] {
    return comments.value.filter(comment => ids.includes(comment.id))
  }
  function findBlogPostComments(postId: number): BlogPostComment[] {
    return comments.value.filter(comment => comment.postId === postId)
  }
  function findUserComments(userId: number): BlogPostComment[] {
    return comments.value.filter(comment => comment.userId === userId)
  }

  // api
  async function leaveBlogPostComment(
    blogPostComment: Omit<BlogPostComment, 'id' | 'userId'>): Promise<BlogPostComment> {
    const account = useStoreAuth().account
    if (!account) {
      throw new Error(`blogPosts.ts: cannot leave comment before sign in
      stores/auth.account === null`)
    }

    const userId = account.id
    const newComment = await api.leaveBlogPostComment({
      userId,
      ...blogPostComment,
    })
    comments.value.push(newComment)
    return newComment
  }


  const tags = allTags
  const categories = blogPostsCategories

  return {
    blogPosts,
    getBlogPosts,
    findPost,
    findPosts,

    comments,
    findComment,
    findComments,
    findBlogPostComments,
    findUserComments,

    leaveBlogPostComment,
    
    tags,
    categories
  }
})