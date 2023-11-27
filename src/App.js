import NavigationMenu from "./components/NavigationMenu";
import Login from "./components/Login";
import { BrowserRouter ,Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Dashboard from './components/Dashboard';
import useToken from "./components/useToken";
import { Navigate } from "react-router-dom";



function App() {

  const {token, setToken} = useToken();

  if (!token){
    return <Login setToken={setToken}/>
  }

 

  const renderProtectedContent = () => {
    const isAuthenticated = !!token;
    return isAuthenticated ? <Dashboard /> : <Navigate to="/signin" replace />
  }

  return (

      <BrowserRouter>
        <div className="App">
          <Routes>
 
      
          <Route path="/" exact element={<NavigationMenu />} />
            <Route path="/signin" element={<Login setToken={setToken}/>} />
            
            <Route path="/dashboard" 
            element={
              renderProtectedContent()
            } 
              />
            
           
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
