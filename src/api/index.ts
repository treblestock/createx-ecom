import type { BlogPost, BlogPostComment, Product, ProductReview,  } from "~/types"


const api = {
  async getBlogPostComments(count: number = 4): Promise<BlogPostComment[]> {
    return (await import("../public/data/blogPostComments.min.json")).default.slice(0, count) as BlogPostComment[]
  },
  async getBlogPosts(count: number = 4): Promise<BlogPost[]> {
    return (await import("../public/data/blogPosts.min.json")).default.slice(0, count) as BlogPost[]
  },
  async getProductReviews(count: number = 4): Promise<ProductReview[]> {
    return (await import("../public/data/productReviews.min.json")).default.slice(0, count) as ProductReview[]
  },
  async getProducts(count: number = 16): Promise<Product[]> {
    return (await import("../public/data/products.min.json")).default.slice(0, count) as Product[]
  },
}

export default api