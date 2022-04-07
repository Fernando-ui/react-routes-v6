import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { ACTIONS } from "../../types/types";

export const LoginScreen = () => {
  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";

    dispatch({ type: ACTIONS.LOGIN, payload: { name: "Fernando" } });
    const lastSearch = localStorage.getItem("search");
    console.log(lastSearch,'ultima busqueda');
    
    if (!lastSearch) {
      console.log('pasando por el primero');
      
      navigate(lastPath, {
        replace: true,
      });
      return;
    } else {
      console.log('pasando por el segundo');
      navigate(`${lastPath}${lastSearch}`, { replace: true });
      return;
    }
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
