import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const history = useHistory();

    const [auth, setAuth] = useState(false)
    const [message, setMessage] = useState(" ")
    const [username, setUsername] = useState(" ")

    axios.defaults.withCredentials = true

    useEffect(()=>{
        axios.get('http://localhost:4000/authentication').then(res=>{
            if (res.data.Status === "Success") {
                setAuth(true)
                setUsername(res.data.username)
                // history.push('/')
            } else{
                setAuth(false)
                setMessage(res.data.Error)
            }
        }).then((err)=> {console.log(err)})
    }, [])


  const value = {
    auth,
    setAuth,
    message,
    setMessage,
    username,
    setUsername
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}




