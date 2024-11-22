import React, { createContext,useContext,useState  } from 'react'
import Cookies from "js-cookie"

export const AuthContext = createContext() 

export  const  AuthProvider = ({children})=>  {
    const initialUserState = Cookies.get("token") || localStorage.getItem('messenger')
    let parsedUserState;
    try {
        parsedUserState = initialUserState ? JSON.parse(initialUserState) : undefined;
    } catch (error) {
        parsedUserState = initialUserState;
    }

    const [authUser, setAuthUser] = useState(parsedUserState);
  return (
    <AuthContext.Provider value={{authUser,setAuthUser}}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);
