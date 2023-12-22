import { Cart, Product, ShippingMethod } from "~/types"
import useStoreProducts from '~/stores/products'

const TAX_RATE = 0.06

const SHIPPING_COST: Record<ShippingMethod, number> = {
  Courier: 25,
  Store: 0,
  UPS: 10,
  createxLocker: 8.50,
  createxGlobalExport: 15,
}

export default function calcCartTotal(cart: Cart, shippingMethod: ShippingMethod) {
  const subtotal = cart.reduce((subtotal, cartRecord) => {
    const product = useStoreProducts().findProduct(cartRecord.productId) as Product
    return subtotal += cartRecord.count * product.price
  }, 0)

  const tax = subtotal * TAX_RATE

  return {
    shippingCost: SHIPPING_COST[shippingMethod],
    tax,
    subtotal,
    total: subtotal + tax + SHIPPING_COST[shippingMethod],
  }
}