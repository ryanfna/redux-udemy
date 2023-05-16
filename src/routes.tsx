import { RouteObject } from 'react-router-dom'
import App from './App'
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
      }
    ]
  },
  {
    path: '*',
    element: <h1>404</h1>
  }
]
export default routes
