import NavigationMenu from "./components/NavigationMenu";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import { AuthProvider } from "./authcontext/AuthContext";



function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
          <Route path="/" exact element={<NavigationMenu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>

    // <AuthProvider>
    //   <BrowserRouter>
    //     {showNavigation && <NavigationMenu />}
    //     <About />
    //     <Routes>
    //       <Route path="/login" element={<Login handleNavigation={handleNavigation} />} />
    //       <Route path="/signup" element={<Signup handleNavigation={handleNavigation} />} />
    //     </Routes>
    //   </BrowserRouter>
    // </AuthProvider>
  );
}

export default App;
