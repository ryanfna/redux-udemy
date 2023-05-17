import { device } from 'config/misc'
import styled from 'styled-components'

const FeedsContainer = styled.div`
  display: block;
  height: 100%;
  color: black;
  font-size: 24px;
  padding: 15px;
`

const TitleFeed = styled.h3`
  font-weight: semi-bold;
  margin: 0;
  margin-bottom: 15px;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1);
  grid-gap: 15px;

  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${device.desktop} {
    grid-template-columns: repeat(5, 1fr);
  }
`

export { FeedsContainer, GridContainer, TitleFeed }
