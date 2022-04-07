import { useContext } from "react";
import { AuthContext } from "../auth/authContext";
import {Navigate, useLocation} from 'react-router-dom';

export const PrivateRoutes = ({children}) => {
    
  const { user } = useContext(AuthContext);
  console.log('Private route');
  const {pathname} = useLocation();
    localStorage.setItem('lastPath',pathname);

    const {search} = useLocation();
    localStorage.setItem('search',search);
    

  return user.logged ? children : <Navigate to="/login"/>
};
