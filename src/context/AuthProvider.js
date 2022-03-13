import React from 'react'
import { auth } from '.././firebase/config'
export const AuthContext = React.createContext()
export function useAuth(){
    return React.useContext(AuthContext)
}
const AuthProvider = ({children}) => {
 const [ displayName , setDisplayName]= React.useState()
    const [ currentUser , setCurrentUser] = React.useState()
     function  signUp(email , password){
       auth.createUserWithEmailAndPassword(email, password)
        .then(function(result) {
          return result.user.updateProfile({
            displayName
          })
        })
    }
    function login(email , password ){
        return auth.signInWithEmailAndPassword(email,password)
    }
    function logout(){
        return auth.signOut()
    }
    function resetpass(email){
        return auth.sendPasswordResetEmail(email)
    }
    React.useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged(user=>{
            setCurrentUser({
              displayName:user.displayName,
              email: user.email,
              uid:user.uid
            })
        })
        return unsubscribe
    },[])
    const value={
        currentUser,
        signUp,
        login,
        logout,
        resetpass,
        displayName , 
        setDisplayName
    }
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider