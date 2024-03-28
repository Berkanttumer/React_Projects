import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../ContextAPI/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (!user) {
    toast.error('Please login to see your favorites');
    return <Navigate to="/Account" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
