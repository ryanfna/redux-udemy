import { CartDto } from '@types'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { removeCard } from 'store/slices/cart.slice'
import {
  ButtonRemove,
  CartDescriptionItem,
  CartInfo,
  CartItemContainer,
  CartItemImage,
  CartPriceItem,
  CartTitleItem
} from './cart.style'

const CartInline: FC<CartDto> = ({ id, image, name, description, price, quantity }) => {
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

export default CartInline
