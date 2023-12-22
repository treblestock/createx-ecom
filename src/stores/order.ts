import { defineStore } from "pinia"
import type {Cart, Order, PaymentMethod, Product, ShippingMethod} from '~/types'


import useStoreAuth from '~/stores/auth'
import useStoreCart from '~/stores/cart'
import useStoreProfile from '~/stores/profile'

export default defineStore('orders', () => {
  // shipping & billing
  const isValidShippingBillingForm = computed(() => {
    if (Object.values(shippingForm.value).includes('') ) return false
    if (isBillingEqualsShipping.value) return true
    if (Object.values(billingForm.value).includes('') ) return false
    return true
  })
  const shippingForm = ref<Omit<Order['tracking']['shipping'], 'isBillingEqualsShipping' | 'shippingMethod'>>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    address: '',
    zipCode: '',
  })
  const billingForm = ref<Omit<Order['tracking']['shipping'], 'isBillingEqualsShipping' | 'shippingMethod'>>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    address: '',
    zipCode: '',
  })
  const isBillingEqualsShipping = ref(false)

  const shippingMethod = ref<ShippingMethod>('Courier')


  var calcCartTotal = useCalcCartTotal


  // payment
  const isValidPaymentForm = computed(() => {
    if (selectedPaymentMethod.value === 'cash') return true
    if (selectedPaymentMethod.value === 'creditCard' &&
      Object.values(creditCardForm.value).every(value => typeof value === 'number') ) return true
    if (selectedPaymentMethod.value === 'paypal' &&
      typeof paypalForm.value.cardNumber === 'number' &&
      paypalForm.value.password?.length !== 0) return true

    return false
  })
  const selectedPaymentMethod = ref<PaymentMethod>('paypal')

  const creditCardForm = ref({
    cardNumber: undefined as undefined | number,
    expiryDate: undefined as undefined | number,
    cvc: undefined as undefined | number,
  })
  
  const paypalForm = ref({
    cardNumber: undefined as undefined | number,
    password: undefined as undefined | string,
  })

  // order comment
  const orderComment = ref('')


  // notification
  const isNotifyWhenDeliveried = ref(false)

  // promocode
  const promocode = ref('')


  // validation and purchase
  const userId = computed(() => useStoreAuth().account?.id)
  const isValidForm = computed(() => 
    isValidShippingBillingForm.value && isValidPaymentForm.value
  )

  async function makeOrder() {
    if (!userId.value) throw new Error(`order.ts: signed in before make order`)

    if (!isValidForm.value) return null

    const expectedDate = new Date()

    expectedDate.setDate(expectedDate.getDate() + 7)
    const newOrder = await api.makeOrder({
      userId: userId.value,
      tracking: {
        orderDate: new Date(),
        expectedDate,
        history: [],
        status: 'Booking Arranged',
        isNotifyWhenDeliveried: isNotifyWhenDeliveried.value,
        shipping: {
          ...shippingForm.value,
          isBillingEqualsShipping: isBillingEqualsShipping.value,
          shippingMethod: shippingMethod.value,
        },
      },
      cart: [...useStoreCart().cart.values()],
      comment: orderComment.value,
      promocode: promocode.value,
    })

    if (!newOrder) return null
    useStoreProfile().orders.push(newOrder)
  }



  return {
    shippingForm,
    billingForm,
    isBillingEqualsShipping,
    
    shippingMethod,
    calcCartTotal,

    // payment
    selectedPaymentMethod,
    creditCardForm,
    paypalForm,
    // order comment
    orderComment,
    // notification
    isNotifyWhenDeliveried,
    promocode,

    isValidForm,
    makeOrder,
  }

})