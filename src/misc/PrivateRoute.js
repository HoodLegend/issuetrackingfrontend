
import { Navigate, Outlet, Route } from "react-router-dom";

import useToken from "../components/useToken";
import Dashboard from "../components/Dashboard";
import { Component } from "react";
import Login from "../components/Login";

function PrivateRoute ({ component: Component , ...rest}) {
  
    const {token, setToken} = useToken();

    if (!token){
      return <Login setToken={setToken}/>
    
    }

  const isAuthenticated = !!token;

  return  isAuthenticated ? <Component {...rest}/> : <Navigate to="/signin" replace />
    

}
    
 
export default PrivateRoute;