import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51LsSMqF0mycr7dHA0wYhi5qXQcSUdoaOUNFqR5R0IMmCbMvTBPKIaxS9WO4P0NDe8ngZbDigMBxSVzaHLFPlVWha00ToJzYIvw'

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('Payment was successful')
      })
      .catch((err) => {
        console.log('Payment Error: ', JSON.parse(err))
        alert(
          'There is an issue with the payment. Plase use the provided credit card'
        )
      })
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}
export default StripeCheckoutButton
