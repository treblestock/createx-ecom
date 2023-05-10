type ProductCategory = 'men' | 'woman' | 'boys' | 'girls'
type ProductSize = number
type ProductColor = 'black' | 'brown' | 'paleBlue' | 'yellow'
type Rating = 0 | 1 | 2 | 3 | 4 | 5


interface Product {
  generalInfo: ProductGeneralInfo,
  details: ProductDetails,
  preview: ProductPreview,
  reviews: ProductReviews,
}
interface ProductPreview {
  id: number,
  category: ProductCategory,
  desctiption: string,
  price: number,
  discount: number,
  rating: Rating,
  sizes: ProductSize[],
  colors: ProductColor[],
}
interface ProductGeneralInfo {

}
interface ProductDetails {}
interface ProductReviews {}




// ProductCategory
// Product
// ProductPreview
// ProductGeneralInfo
// ProductDetails
// SizeChart
// Rating
// Review
// ShippingData

// User
// UserAuthData
// UserProfile
// RecientlyViewed
// Whishlist
// Cart
// Order
// OrderTrack
// OrderForm

// BlogPost
// BlogPostComment

// Contacts