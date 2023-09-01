import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const AuthRoute: React.FC = ({ children }: any) => {
  const currentUser = useAuth();

  if (!currentUser) {
    return <Navigate to="/user/auth" />;
  }

  return <>{children}</>;
};  

export default AuthRoute;
