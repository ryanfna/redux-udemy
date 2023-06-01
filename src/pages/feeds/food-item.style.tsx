import styled from 'styled-components'

const FoodImage = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`

const FoodTitle = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`

const FoodDescription = styled.div`
  font-size: 0.8rem;
  margin-bottom: 5px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const FoodPrice = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #991b1b;
  min-width: 30%;
  margin-left: auto;
  & > span {
    font-size: 1.5rem;
  }
`

const FooterFoodItem = styled.div`
  height: 100%;
  padding: 5px 10px 30px 10px;
  display: flex;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  background-color: white;
  justify-content: space-between;
  position: relative;
`

const FooterContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const AddToCartButton = styled.button`
  display: none;
  position: absolute;
  margin-top: auto;
  width: 100%;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  background-color: #991b1b;
  color: white;
  border: none;
  padding: 8px 0;
  transition: all 1s ease-in-out;
  bottom: 0;
  left: 0;
`

const FoodContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: all 1s ease-in-out;
  border-radius: 5px;
  background-color: transparent;
  border: 2px solid transparent;
  &:hover {
    border: 2px solid #991b1b;
  }

  &:hover ${AddToCartButton} {
    display: block;
  }
`

export {
  FoodContainer,
  FoodImage,
  FoodTitle,
  FoodDescription,
  FoodPrice,
  FooterFoodItem,
  FooterContentWrapper,
  AddToCartButton
}
