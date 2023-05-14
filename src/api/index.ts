const api = {
  async getblogPostComments() {
    return import("../public/data/blogPostComments.json")
  },
  async getblogPosts() {
    return import("../public/data/blogPosts.json")
  },
  async getindex() {
    return import("../public/data/index.json")
  },
  async getproductReviews() {
    return import("../public/data/productReviews.json")
  },
  async getproducts() {
    return import("../public/data/products.json")
  },
}

export default api