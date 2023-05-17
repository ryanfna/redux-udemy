import { FC, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from 'store'
import { CartItem, removeCard } from 'store/slices/cart.slice'
import {
  ButtonRemove,
  CartDescriptionItem,
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
  const total = useMemo(() => cart.reduce((acc, item) => acc + item.price! * item.quantity, 0), [cart])

  return (
    <>
      <CartListContainer>
        {cart.map((item, index) => (
          <CartInline key={index} {...item} />
        ))}
        <br />
        <CartTotalContainer>
          <CartTotalTitle>Total:</CartTotalTitle>
          <CartTotalPrice>{total}$</CartTotalPrice>
        </CartTotalContainer>
      </CartListContainer>
    </>
  )
}

export default CartPage
