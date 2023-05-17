import { FC, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppDispatch, AppState } from 'store'
import { CartItem, checkoutCart, removeCard } from 'store/slices/cart.slice'
import {
  ButtonRemove,
  CartButtonCheckout,
  CartDescriptionItem,
  CartEmpty,
  CartInfo,
  CartItemContainer,
  CartItemImage,
  CartListContainer,
  CartPriceItem,
  CartTitleItem,
  CartTotalContainer,
  CartTotalPrice,
  CartTotalTitle
} from './cart.style'

const CartInline: FC<CartItem> = ({ id, image, name, description, price, quantity }) => {
  const dispatch = useDispatch()

  const handleRemoveFromCart = (_evt: any) => {
    if (!id) return
    dispatch(removeCard(id))
  }

  return (
    <CartItemContainer>
      <CartItemImage src={image} />
      <CartInfo>
        <CartTitleItem>{name}</CartTitleItem>
        <CartDescriptionItem>{description}</CartDescriptionItem>
      </CartInfo>
      <CartPriceItem>{price}$</CartPriceItem>
      <div>x{quantity}</div>
      <ButtonRemove onClick={handleRemoveFromCart}>Remove</ButtonRemove>
    </CartItemContainer>
  )
}

const CartPage = () => {
  const cart = useSelector((state: AppState) => state.cart)
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const total = useMemo(() => cart.reduce((acc, item) => acc + item.price! * item.quantity, 0), [cart])

  const handleCheckOut = () => {
    console.log('handleCheckOut')
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
