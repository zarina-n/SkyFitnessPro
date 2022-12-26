import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../store/user/userSlice'

const ProtectedRoute = () => {
  const { login } = useSelector(selectUser)

  return login ? <Outlet /> : <Navigate to="/" />
}
export default ProtectedRoute
