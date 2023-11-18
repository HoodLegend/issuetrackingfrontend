import NavigationMenu from "./components/NavigationMenu";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Dashboard from './components/Dashboard';
import { useEffect, useState } from "react";
import AuthService from "./services/authservice";
import EventBus from "./misc/EventBus";
import PrivateRoute from "./misc/PrivateRoute";


function App() {

  const [currentUser, setCurrentUser] = useState(undefined);
  const [showDashBoard, setShowDashBoard] = useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      // setShowDashBoard(user.roles.includes("CUSTOMER"));
      // setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    // setShowDashBoard(false);
    // setShowAdminBoard(false);
    setCurrentUser(undefined);
  };


  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
          <Route path="/" exact element={<NavigationMenu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
