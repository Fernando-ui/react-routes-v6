import {useReducer} from "react";
import { AuthContext } from "./auth/authContext";
import { authReducer } from "./auth/authReducer";
import { AppRouter } from "./routers/AppRouter";

const init = () => {
  return JSON.parse( localStorage.getItem('user')) || {logged:false}
}


export const HeroApp = () => {
  const [user, dispatch] = useReducer(authReducer,{nombre:'fer2'}, init);
  console.log(user,'Tenemos al use4');
  
  return (
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};
