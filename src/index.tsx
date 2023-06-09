import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import routes from './routes'
import store from './store'

const router = createBrowserRouter(routes)
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  </Provider>
)
