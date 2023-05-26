import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppDispatch, AppState } from 'store'
import { checkoutCart } from 'store/slices/cart.slice'
import CartInline from './cart-inline'
import {
  CartButtonCheckout,
  CartEmpty,
  CartListContainer,
  CartTotalContainer,
  CartTotalPrice,
  CartTotalTitle
} from './cart.style'

const CartPage = () => {
  const cart = useSelector((state: AppState) => state.cart)
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const total = useMemo(() => cart.reduce((acc, item) => acc + item.price! * item.quantity, 0), [cart])

  const handleCheckOut = () => {
    const confirm = window.confirm('Are you sure you want to checkout?')
    if (confirm) {
      dispatch(checkoutCart())
      setTimeout(() => {
        navigate('/')
      }, 1000)
    }
  }

  if (!cart.length) return <CartEmpty>Your cart is empty</CartEmpty>
  return (
    <>
      <CartListContainer>
        {cart.map((item, index) => (
          <CartInline key={index} {...item} />
        ))}
        <br />
        <CartTotalContainer>
          <CartTotalTitle>Total:</CartTotalTitle>
          <CartTotalPrice>
            {total}
            <span>$</span>
          </CartTotalPrice>
        </CartTotalContainer>
        <CartButtonCheckout onClick={handleCheckOut}>Checkout</CartButtonCheckout>
      </CartListContainer>
    </>
  )
}

export default CartPage
