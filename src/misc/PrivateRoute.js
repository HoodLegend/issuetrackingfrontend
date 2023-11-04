import { useAuth } from "../authcontext/AuthContext";
import { Navigate } from 'react-router-dom';

function PrivateRoute ({children}) {
    const { userIsAuthenticated } = useAuth()
    return userIsAuthenticated() ? children : <Navigate to="/login" />
}

export default PrivateRoute;