import { defineStore } from "pinia"
import type { BlogPost, BlogPostComment } from '~/types'
import blogPostsMock from '~/public/data/blogPosts.json'
import commentsMock from '~/public/data/blogPostComments.json'
import {
  tags as allTags,
  blogPostsCategories,
} from '~/public/data/different.json'


export default defineStore('blogPosts', () => {
  // posts
  const blogPosts = ref<BlogPost[]>(blogPostsMock as BlogPost[])

  function findPost(id: number): BlogPost | undefined {
    return blogPosts.value.find(post => post.id === id)
  }
  function findPosts(ids: number[]): BlogPost[] {
    return blogPosts.value.filter(post => ids.includes(post.id))
  }


  // comments
  const comments = ref<BlogPostComment[]>(commentsMock as BlogPostComment[])

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


  const tags = allTags
  const categories = blogPostsCategories

  return {
    blogPosts,
    findPost,
    findPosts,

    comments,
    findComment,
    findComments,
    findBlogPostComments,
    findUserComments,

    tags,
    categories
  }
})