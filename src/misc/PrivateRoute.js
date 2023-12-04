
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useToken from "../hooks/useToken";


function PrivateRoute ({ component: Component , ...rest}) {

  const navigate = useNavigate();

  const {token} = useToken();
  const isAuthenticated = !!token;

    useEffect(() => {
      // checks if the user is Authenticated 
      // if not redirects them to the login page. 
      if (!isAuthenticated){
        return navigate("/signin")
      }
    })
  return  <Component {...rest}/> 

}
    
 
export default PrivateRoute;