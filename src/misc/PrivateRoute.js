import AuthService from "../services/authservice";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

function PrivateRoute ({ children}) {
    const currentUser = AuthService.getCurrentUser();
    const navigate = useNavigate();
    


    return ( 
    currentUser ? children : navigate("/login")
      
      
      
      //   <Route
      //   {...rest}
      //   render={(props) => {
      //     // if the user is logged in, render the component
      //     if (currentUser) {
      //       return <Dashboard {...props} />;
      //     }
      //     // otherwise, redirect to the login page
      //     else {
      //       return navigate("/login");
      //     }
      //   }}
      // />
      
      
    );
}
 
export default PrivateRoute;