import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "./Firebase.init";
import { useEffect } from "react";

const AuthProvider = ({children}) => {

    const signUpUser =(email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOutUser = ()=>{
        return signOut(auth)
    }
    
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser)
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const userInfo = {
        signUpUser,
    }
   
   return (
     <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
   )
};

export default AuthProvider;