import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import './App.css'
import Header from './component/header'

const AppContainer = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`

const MainContainer = styled.div`
  display: block;
  height: 100%;
  width: 80%;
  margin: 0 auto;
`

const BannerContainer = styled.div`
  display: block;
  width: 100%;
  padding: 15px;
  text-align: center;
  margin: 0 auto;
  font-style: italic;
  color: #b91c1c;
  font-size: 1rem;
  font-weight: light;
`

function App() {
  return (
    <AppContainer>
      <Header />
      <MainContainer>
        <BannerContainer>This is a learning project. Please do not use this for production.</BannerContainer>
        <Outlet />
      </MainContainer>
    </AppContainer>
  )
}

export default App
