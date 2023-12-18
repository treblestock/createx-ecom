export { assetsIcons } from './assetsIcons'
export * from './clientView'


// todo: manage product type inheritance hierarcy

// utils
export type valueof<T> = T[keyof T]
export type valueToRecord<T> = {
  [key in keyof T]: Record<key, T[key]>
}

export type recordof<T> = valueof<valueToRecord<T> >

export type RefOrComputed<T> = Ref<T> | ComputedRef<T>


// Shared
export type Id = number
export type DateRecord = string
export type Timestamp = number

// Users
export type User = {
  id: Id
  fullName: string
}

export type UserBio = {
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  passNew: string,
  passConfirm: string,
  country: string,
  city: string,
  address: string,
  zipCode: string,
}

// Products
/*
  Category Sex
  -> Category Clothes Type(sex)
  -> posible Sizes(clothesType, sex)
  -> products[]
  -> product colors(product)
  -> product sizes(product)
*/ 
export type ProductSize = ProductSizeLetter | ProductSizeNumber
export type ProductSizeNumber = number
export type ProductSizeLetter = 'XS' | 'S' | 'M' | 'L ' | 'XL' | 'XXL'


// view
export type ProductCategorySex = 'men' | 'women' | 'kids'
export type ClothesCategory = string
export type ShoesCategory = string
export type AccessoriesCategory = string

export type ProductColor = string
export type Rating = 1 | 2 | 3 | 4 | 5


export interface Product {
  id: Id,
  imgs: string[]
  name: string
  categorySex: string
  categoryMajorClothType: string
  categoryMinorClothType: ClothesCategory | ShoesCategory | AccessoriesCategory
  brand: string
  materials: string[]
  colors: ProductColor[]
  sizes: ProductSize[]
  price: number
  discount?: number
  rating: Rating
  reviewsIds: reviewId[]
  details: {
    desctiption: string
    characteristics: string[]
    fabricClauses: string[]
    careClauses: careClause[]
  }
}
export type ProductId = Id

export type ProductPreview = Pick<Product, 'id' | 'categorySex' | 'categoryMajorClothType' | 'name' | 'price' | 'discount' | 'rating' | 'sizes' | 'colors' >
export type ProductMainCharacteristics = Pick<Product, 'brand' | 'materials' | 'colors' | 'sizes'>

export type ProductDetails = Product['details']

export type careClause = {
  icon: string
  explanation: string
}

// product review

export type UserId = Id
export type reviewId = Id
export interface ProductReview {
  id: Id
  productId: ProductId
  userId: UserId
  date: DateRecord
  rating: Rating
  comment: string
  likes: number
  dislikes: number
}


// Collections
export type Collection = {
  description: string
  title: string
  backgroundImg: string
  linkOutlined?: {
    text: string
    url: string
  }
  linkSolid?: {
    text: string
    url: string
  }
  expiresWhen?: string
}



// todo: SizeChar

// userProfile

export interface SignInForm {
  email: string
  password: string
  keepSignedIn: boolean
}
export interface SignUpForm {
  fullName: string
  email: string
  password: string
  confirmPassword: string
  keepSignedIn: boolean
}

export interface UserAccount {
  profile: UserProfile
  orders: OrderPreview[]
  favourite: ProductId[]
  recentlyViewed: ProductId[]
  reviews: ProductReview[]
}

export interface UserProfile {
  fistName: string
  lastName: string
  email: string
  phone: string
  password: string
  country: string
  city: string
  address: string
  zipCode: string
}

export interface UserProfileForm extends Omit<UserProfile, 'password'> {
  newPassword: number
  confirmPassword: number
}

// Cart
export type Cart = CartRecord[]
export type CartRecord = CartProductVariant & {count: number}
export interface CartProductVariant {
  productId: ProductId
  size: ProductSize
  color: ProductColor
}
export type Count = number

// export interface CartProduct { // client
//   name: string
//   img: string
//   price: number
//   color: ProductColor
//   size: ProductSize
//   isFavourite: boolean
// }


// Make Order 
export interface Order {
  id: string
  userId: User['id']
  cart: Cart
  tracking: OrderTracking
  promocode?: string
  comment?: string
}
export type OrderId = string

export interface Shipping {
  firstName: string
  lastName: string
  email: string
  phone: string
  country: string
  city: string
  address: string
  zipCode: string
  isBillingEqualsShipping: boolean
  shippingMethod: ShippingMethod
} 
export type ShippingMethod = 'Courier' | 'Store' | 'UPS' | 'createxLocker' | 'createxGlobalExport'

export interface ShippingMethodInfo {
  type: string
  time: string
  price: number
}

export type Payment = valueof<PaymentMethodToMethodDataMap>
export type PaymentMethod = keyof PaymentMethodToMethodDataMap
export interface PaymentMethodToMethodDataMap {
  'creditCard': creditCardData
  'paypal': PaypalData
  'cash': null
}
export interface creditCardData {
  cardNumber: number
  expiryDate: number
  CVC: string
}
export interface PaypalData {
  cardNumber: number
  password: string
}

// Order Preview
export interface OrderPreview {
  orderId: OrderId
  expectedDate: DateRecord
  status: OrderStatus
  cart: Cart
  total: number
}
export type OrderStatus = 'In progress' | 'Delivered' | 'Canceled'

// Track Order
export interface OrderTracking {
  shipping: Shipping
  orderDate: DateRecord
  expectedDate: DateRecord
  history: OrderTrackingHistory,
  status: OrderTrackingStatus
  isNotifyWhenDeliveried: boolean
}

export type OrderTrackingHistory = TrackHistoryType[]
export interface TrackHistoryType {
  status: OrderTrackingStatus
  location: string
  time: string
}
export type OrderTrackingStatus = 'Order Placed' | 'Documentation Prepared' | 'Booking Arranged' | 'Collected' | 'In Transit to Destination' | 'Arrived at Destination' | 'Out for Delivery' | 'Delivered' | 'Canceled'

// Mailing
export interface SubscribeMailingForSale {
  email: string
}
export interface SubscribeMailing {
  email: string
  selectedSexCategories: 'Women' | 'Men' | 'Girls' | 'Boys'
  isAgreeToReciveMails: boolean
}

// Contacts
export interface ContactUsForm {
  fullName: string
  email: string
  phone: string
  subject: string
  message: string
}

export type OutletStores = OutletStore[]
export interface OutletStore {
  address: string
  phone: string
  email: string
  geo: string
  img: string
}

export interface QnA {
  question: string
  answer: string
}


// Blog
export interface BlogPost {
  id: Id
  img: string
  category: string[]
  date: DateRecord
  commentsIds: commmentId[]
  title: string
  description: string
  tags: BlogPostTag[]
  content: BlogPostContent
}
export type BlogPostId = Id

export interface BlogPostPreview extends Pick<BlogPost, 'category' | 'date' | 'title' | 'description' | 'tags'> {
  commentsIds: number
}

export type BlogThemeCategory = 'Fashion' | 'Designers' | 'Lifestyle' | 'Celebrity style'
export type BlogPostTag = 'trends' | 'inspiration' | 'designers' | 'kidsfashion' | 'streetstyle' | 'models'

export interface BlogPostComment {
  id: Id
  postId: BlogPostId
  userId: UserId
  date: DateRecord
  comment: string
  likes: number
  dislikes: number
}
export type commmentId = Id

export interface LeaveCommentForm {
  comment: string
}

// Blog dynamic content
export type BlogPostContent = recordof<BlogPostDataTypes>[]



export interface BlogPostDataTypes {
  ul: string[]
  text: string
  quote: string
  bold: string
  img: string
}
export type BlogPostData<E extends keyof BlogPostDataTypes> = BlogPostDataTypes[E]
export type BlogPostEntitiy = keyof BlogPostDataTypes



export type OfflineStore = {
  img: string
  storeName: string
  phoneNumber: string 
  email: string
  workingHours: string 
  address: string
}