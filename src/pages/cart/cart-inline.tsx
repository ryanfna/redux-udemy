import { CartDto } from '@types'
import { MinusIcon, PlusIcon, RemoveIcon } from 'component'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeCard } from 'store/slices/cart.slice'
import {
  ButtonRemove,
  CartItemContainer,
  CartItemDescription,
  CartItemImage,
  CartItemInfo,
  CartItemPrice,
  CartItemTitle,
  CartQuantityContainer,
  CartQuantityValue
} from './cart.style'

const CartInline: FC<CartDto> = ({ id, image, name, description, price, quantity }) => {
  const dispatch = useDispatch()
  if (!id) return null

  const handleRemoveFromCart = (_evt: any) => {
    dispatch(removeCard(id))
  }

  const handleIncrement = (_evt: any) => {
    dispatch(increaseQuantity(id))
  }

  const handleDecrement = (_evt: any) => {
    dispatch(decreaseQuantity(id))
  }

  return (
    <CartItemContainer>
      <CartItemImage src={image} />
      <CartItemInfo>
        <CartItemTitle>{name}</CartItemTitle>
        <CartItemDescription>{description}</CartItemDescription>
      </CartItemInfo>
      <CartItemPrice>{price}$</CartItemPrice>
      <CartQuantityContainer>
        <MinusIcon onClick={handleDecrement} height={24} width={24} />
        <CartQuantityValue>{quantity}</CartQuantityValue>
        <PlusIcon onClick={handleIncrement} height={24} width={24} />
      </CartQuantityContainer>
      <ButtonRemove onClick={handleRemoveFromCart}>
        <RemoveIcon height={24} width={24} />
      </ButtonRemove>
    </CartItemContainer>
  )
}

export default CartInline
