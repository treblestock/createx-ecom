<script setup lang="ts">
import SignInPrompt from '~/components/features/SignInPrompt.vue'
import OrderItemsReview from '~/components/widgets/OrderItemsReview.vue'
import ShippingBillingForm from '~/components/widgets/ShippingBillingForm.vue'
import ShippingMethodForm from '~/components/widgets/ShippingMethodForm.vue'
import PaymentMethod from '~/components/widgets/PaymentMethod.vue'
import OrderPromoForm from '~/components/features/OrderPromoForm.vue'
import OrderTotalPrice from '~/components/widgets/OrderTotalPrice.vue'






</script>

<template>
  <div class="checkout-page">
    <div class="container">
      <div class="main">
        <div class="row">
          <div class="h1">Checkout</div>
          <AppLink class="back-to-shopping"
            :to="{name: 'products'}"
          >Back to shopping</AppLink>
        </div>

        <SignInPrompt class="sign-in-prompt"></SignInPrompt>

        <section class="section-0">
          <div class="section-title h4">1. Item Review</div>
          <OrderItemsReview class="section-content item-review"></OrderItemsReview>
        </section>
        <section class="section-0">
          <div class="section-title h4">2. Shipping & Billing Address</div>
          <ShippingBillingForm class="section-content shiping-billing-form"></ShippingBillingForm>
        </section>
        <section class="section-0">
          <div class="section-title h4">3. Shipping Method</div>
          <ShippingMethodForm class="section-content shipping-method-form"></ShippingMethodForm>
        </section>
        <section class="section-0">
          <div class="section-title h4">4. Payment Method</div>
          <PaymentMethod class="section-content payment-method"></PaymentMethod>
        </section>
        <section class="section-0">
          <div class="section-title h4">5. Additional Information (Optional)</div>
          <TextareaGroup class="comment-group"
            placeholder="Notes about your order, e.g. special noted for delivery."
          >
            Order notes
          </TextareaGroup>
        </section>
      </div>

      <div class="sidebar">
        <OrderPromoForm class="apply-promo"></OrderPromoForm>
        <OrderTotalPrice></OrderTotalPrice>
        <Btn class="complete-order">Complete order</Btn>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '~css/consts';

.checkout-page {
  padding: 3.2rem 0;
}
.container {
  display: flex;
  column-gap: var(--leng-100);

  @media (width < 1270px) {
    flex-wrap: wrap;
    justify-content: center;

    max-width: 81rem;
  }
}
.main {
}
.row {
  display: flex;
  justify-content: space-between;

  margin-bottom: 3.2rem;
}
.section-0 {
  padding: 3.2rem 0;
  border-top: 1px solid $color-gray-300;
}
.section-content {
}
.section-title {
  margin-bottom: 2.4rem;

  color: $color-gray-900;
}

.back-to-shopping {
  font-weight: 700;
  text-decoration: underline;
}
.sign-in-prompt {
}
.item-review {
}
.shiping-billing-form {
}
.shipping-method-form {
}
.payment-method {
}
.sidebar {
  flex: 1 0 39rem;

  & > * {
    margin-bottom: 2.4rem;
  }
}
.apply-promo {
  width: 100%;
}
.complete-order {
  width: 100%;
}

</style>