import { RootState } from '@/store'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CartItem, removeCard } from '../../store/slices/cart.slice'
import { ButtonRemove, CartItemContainer, CartItemImage, CartListContainer } from './cart.style'

const CartInline: FC<CartItem> = ({ id, image, name, description, price }) => {
  const dispatch = useDispatch()

  const handleRemoveFromCart = (_evt: any) => {
    if (!id) return
    dispatch(removeCard(id))
  }

  return (
    <CartItemContainer>
      <CartItemImage src={image} />
      <div>{name}</div>
      <div>{description}</div>
      <div>{price}</div>
      <ButtonRemove onClick={handleRemoveFromCart}>Remove</ButtonRemove>
    </CartItemContainer>
  )
}

const CartPage = () => {
  const cart = useSelector((state: RootState) => state.cart)
  return (
    <>
      <CartListContainer>
        {cart.map((item, index) => (
          <CartInline key={index} {...item} />
        ))}
      </CartListContainer>
    </>
  )
}

export default CartPage
