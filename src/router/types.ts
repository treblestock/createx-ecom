import type { RouterLinkProps } from 'vue-router'
export type AppRouteName = 'account' | 'accountProfile' | 'accountOrders' | 'accountFavourite' | 'accountRecentlyViewed' | 'accountReviews' | 'blog' | 'blogPost' | 'checkout' | 'contacts' | 'contactsFeedback' | 'contactsOutletStores' | 'contactsFAQ' | 'home' | 'products' | 'product' | 'trackOrder'
export interface WithParamsAny extends Omit<RouterLinkProps, 'to'> {
  to?: string | RouterLinkProps['to'] | {
    params?: Record<string, any>
    name?: AppRouteName
  } 
}