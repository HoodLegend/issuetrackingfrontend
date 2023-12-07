import NavigationMenu from "./components/NavigationMenu";
import Login from "./components/Login";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Signup from "./components/Signup";
import Dashboard from './components/Dashboard';
import AddIssue from './components/AddIssue'
import { Navigate } from "react-router-dom";
import PrivateRoute from "./misc/PrivateRoute";
import useToken from "./hooks/useToken";



function App() {

 const {setToken} = useToken();

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* public routes */}
          <Route path="/" exact element={<NavigationMenu />} />
          <Route path="/signin" element={<Login setToken={setToken} />} />
          <Route path="/signup" element={<Signup setToken={setToken} />} />

          {/* protected Routes */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute component={Dashboard}>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/add-issue"
            element={
              <PrivateRoute component={AddIssue}>
                <AddIssue />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
