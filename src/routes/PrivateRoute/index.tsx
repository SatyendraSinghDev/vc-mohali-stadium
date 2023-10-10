import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootState } from 'app/store'

interface Props {
  component: React.ComponentType
}

export const PrivateRoute: React.FC<Props> = ({ component: RouteComponent }: Props) => {
  const user = useSelector((state: RootState) => state.user)
  if (user?.token) {
    return <RouteComponent />
  }

  return <Navigate to="/login" />
}
