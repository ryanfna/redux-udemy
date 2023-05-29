import { withProtected } from 'component/ProtectedRoute'
import Auth from 'pages/auth'
import AddFood from 'pages/feeds/AddFood'
import Profile from 'pages/profile'
import { RouteObject } from 'react-router-dom'
import App from './App'
import CartPage from './pages/cart'
import DetailFood from './pages/detail'
import Feeds from './pages/feeds'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Feeds />
      },
      {
        path: '/food/:foodId',
        element: <DetailFood />
      },
      {
        path: '/cart',
        element: withProtected(<CartPage />)
      },
      {
        path: '/add-food',
        element: withProtected(<AddFood />)
      },
      {
        path: 'profile',
        element: withProtected(<Profile />)
      }
    ]
  },
  {
    path: '/login',
    element: <Auth />
  },
  {
    path: '*',
    element: <h1>404</h1>
  }
]
export default routes
