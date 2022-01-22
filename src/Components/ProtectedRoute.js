import React, { useState, useEffect } from 'react';
import { Navigate, useLocation} from 'react-router-dom';
import { Auth } from "aws-amplify";

const ProtectedRoute = ({
    children,
  }) => {
  const [isAuthenticated, setLoggedIn]=useState('true')
  
  useEffect(() => {
    (async () => {
      let user = null;

      try {
        user = await Auth.currentAuthenticatedUser();
        if (user) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      } catch (e) {
        setLoggedIn(false);
      }
    })();
  });
  
  let location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;