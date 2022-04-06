import { useContext } from "react";
import { AuthContext } from "../auth/authContext";
import {Navigate} from 'react-router-dom';

export const PrivateRoutes = ({children}) => {
    console.log(children);
    
  const { user } = useContext(AuthContext);
  console.log(user);

  return user.logged ? children : <Navigate to="/login"/>
};
