import styled from 'styled-components'
import Feeds from './feeds'

const MainContainer = styled.div`
  display: block;
  height: 100%;
  color: white;
  font-size: 24px;
`

const Main = () => {
  return (
    <MainContainer>
      <Feeds />
    </MainContainer>
  )
}

export default Main
