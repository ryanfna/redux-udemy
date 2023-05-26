import styled from 'styled-components'

const FoodContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border-radius: 5px;
  background-color: white;
  border: 2px solid transparent;
  &:hover {
    border: 2px solid #b91c1c;
  }
`
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
  color: #b91c1c;
  min-width: 30%;
  margin-left: auto;
  & > span {
    font-size: 1.5rem;
  }
`

const FooterFoodItem = styled.div`
  height: 100%;
  margin-top: 5px;
  padding: 5px 10px 10px 10px;
  display: flex;
  justify-content: space-between;
`

const FooterContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const AddToCartButton = styled.button`
  margin-top: auto;
  width: 100%;
  background-color: #b91c1c;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  background-color: white;
  border: 1px solid #b91c1c;
  color: #b91c1c;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: #b91c1c;
    color: white;
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
