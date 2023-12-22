import { useState } from "react";
import  { jwtDecode } from 'jwt-decode';

function useToken () {
    const getToken =() =>{
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
      }
    
    const [token, setToken] = useState(getToken());

    const saveToken = (userToken) => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
      };

      const getUserEmail = () => {
        const token = getToken();
        if (token){
          const payload = jwtDecode(token);
          return payload?.name;
        }

        return null;
      }

      const getUserRole = () => {
        const token = getToken();
        if (token){
          const payload = jwtDecode(token)
          return payload?.role;
        }

        return null;
      }

      return {
        setToken: saveToken,
        token,
        getUserEmail,
        getUserRole

      }

}
 
export default useToken;