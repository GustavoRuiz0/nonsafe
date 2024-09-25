import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';

const PrivateRoute = (element) => {
  const { authToken, checkTokenValidity } = useAuth();

  const isAuthenticated = () => {
    return authToken && checkTokenValidity();
  };

  return isAuthenticated() ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
