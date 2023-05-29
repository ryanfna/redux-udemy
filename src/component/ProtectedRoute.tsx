import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

interface ProtectedRouteProps {
  children: React.ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useSelector((state: any) => state)
  const navigate = useNavigate()

  console.log('user', user)

  if (Object.keys(user).length === 0) {
    navigate('/login')
  }
  return <>{children}</>
}

export default ProtectedRoute

export const withProtected = (component: React.ReactNode) => <ProtectedRoute>{component}</ProtectedRoute>
