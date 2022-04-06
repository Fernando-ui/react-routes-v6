import {useContext} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { ACTIONS } from "../../types/types";



export const LoginScreen = () => {
  const {dispatch} = useContext(AuthContext)
  
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Entrando al login');
    
    dispatch({type:ACTIONS.LOGIN, payload:{name:'Fernando'}});
    navigate('/marvel',{
      replace:true
    });
  };

  return (
    <>
      <div className="container">
        <h1>LoginScreen</h1>
        <hr />
        <button className="btn btn-primary" onClick={() => handleLogin()}>
          Login
        </button>
      </div>
    </>
  );
};
