import NavigationMenu from "./components/NavigationMenu";
import Login from "./components/Login";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Signup from "./components/Signup";
import Dashboard from './components/Dashboard';
import AddIssue from './components/AddIssue'
import useToken from "./components/useToken";
import { Navigate } from "react-router-dom";
import PrivateRoute from "./misc/PrivateRoute";



function App() {

  const {token, setToken} = useToken();

  // if (!token){
  //   return <Login setToken={setToken}/>
  // }

 

  // const renderProtectedContent = ({ component: Component, ...rest }) => {
  //   const isAuthenticated = !!token;
  //   return (
  //     <Route
  //       {...rest}
  //       render={(props) =>
  //         isAuthenticated ? <Component {...props} /> : <Navigate to="/signin" replace />
  //       }
  //     />
  //   );
  //   // return isAuthenticated ? <Component /> : <Navigate to="/signin" replace />
  // }

  return (
<BrowserRouter>
      
        <div className="App">
          
          <Routes>
            {/* public routes */}
          <Route path="/" exact element={<NavigationMenu />} />
            <Route path="/signin" element={<Login setToken={setToken}/>} />
            <Route path="/signup" element={<Signup setToken={setToken}/>} />

            {/* protected Routes */}
            <Route path="/dashboard" 
            element={
              <PrivateRoute component={Dashboard}><Dashboard /></PrivateRoute>
            } 
              />
            


          </Routes>
        </div>
        </BrowserRouter>
      
  );
}

export default App;
