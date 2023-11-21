import type { RouterLinkProps } from 'vue-router'
export type AppRouteName = 'account' | 'accountProfile' | 'accountOrders' | 'accountFavourite' | 'accountRecientlyViewed' | 'accountReviews' | 'blog' | 'blogPost' | 'checkout' | 'contacts' | 'contactsFeedback' | 'contactsOutletStores' | 'contactsFAQ' | 'home' | 'products' | 'product' | 'trackOrder' | 'productGeneralInfo' | 'productDetails' | 'productReviews'
export type TypedTo = string | RouterLinkProps['to'] | {
  params?: Record<string, any>
  name?: AppRouteName
}
export interface WithParamsAny extends Omit<RouterLinkProps, 'to'> {
  to?: TypedTo
}

