import React, {useContext, useState, useEffect}  from 'react'

import { auth } from "./firebase.js"

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider ({children}) {

    //consts
    const   [currentUser,setCurrentUser] = useState()
    const   [loading, setLoading] = useState(true)  //useState is a hook that react offers
   
    
    //inner functions
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
    }
    function logout() {
      return auth.signOut()
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          
          setCurrentUser(user)
          setLoading(false)
      
        })
    
        return unsubscribe
      }, [])
      const value = {currentUser,signup,login,logout}
    
      //return
    return (
        <AuthContext.Provider value={value}>
          {!loading && children}
      </AuthContext.Provider>
    )
    
}
